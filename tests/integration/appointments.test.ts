import app, { init } from "../../src/app";
import faker from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import { createUser } from "../factories/users-factory";
import { cleanDb, generateValidToken } from "../services/helpers";
import { Appointments } from "@prisma/client";

beforeAll(async () => {
    await init();
    await cleanDb();
});

const server = supertest(app);

describe("GET /appointments ", () => {
    it("should return an array with appointments", async () => {
        const token = await generateValidToken()
        const body = {
            "Barber": "Baixim"
        }
        const response = (await server.get("/appointments").set("Authorization", `Bearer ${token}`).send(body));

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    Barber: expect.stringMatching("Baixim"),
                    Day: expect.any(String),
                    Time: expect.any(Number),



                })]))


    });

    it("should return Unauthorized error if not signed in", async () => {
        const body = {
            "Barber": "Baixim"
        }
        const response = await server.get("/appointments").send(body)

        expect(response.status).toBe(401)

    });

    it("shoudl return Bad request error if no body is sent", async () => {
        const token = await generateValidToken()
        const response = await server.get("/appointments").set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(400)

    })
}
);
describe("/Post appointment", () => {
    it("Should respond with unauthorized error if not logged in", async () => {
        const body = {
            "id": 5
        }
        const response = await server.post("/appointments").send(body);
        expect(response.status).toBe(401)
    });

    it("Should respond with bad request error if no body", async () => {
        const body = {
            "id": 5
        };

        const token = await generateValidToken();
        const response = await server.post("/appointments").set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(400)
    });

    it("Should respond with conflictError if appointment already has a booking", async () => {
        const token1 = await generateValidToken();
        const body = {
            "id": 142
        };

        const appointment = await server.post("/appointments").set("Authorization", `Bearer ${token1}`).send(body);

        const token2 = await generateValidToken();

        const response = await server.post("/appointments").set("Authorization", `Bearer ${token2}`).send(body);
        console.log(response.body.message)
        expect(response.status).toBe(409)
    });

    it("Should respond with past data error if user trying to book a past date ", async () => {
        const token = await generateValidToken();
        const body = {
            "id": 1
        };

        const response = await server.post("/appointments").set("Authorization", `Bearer ${token}`).send(body);

        expect(response.status).toBe(400)

    });

    it("Should not allow an user to have 2 appointments in the same week", async () => {
        const token = await generateValidToken();
        const body = {
            "id": 69
        }
        const body2 = {
            "id": 70
        }
        await server.post("/appointments").set("Authorization", `Bearer ${token}`).send(body)
        const response = await server.post("/appointments").set("Authorization", `Bearer ${token}`).send(body2);

        expect(response.status).toBe(400)
    })
    it("Should respond with ok if appointment is vacant and properly spaced", async () => {

        const token = await generateValidToken();

        const body = {
            "id": 100
        }

        const response = await server.post("/appointments").set("Authorization", `Bearer ${token}`).send(body);

        expect(response.status).toBe(200)
    })

    it("Should create a new user and book appointment if user is admin", async () => {

        const token = await generateValidToken({
            id: 1,
            name: "Artur",
            telNumber: "33998715431",
            email: "artur@teste.com",
            password: "artur123",
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date)
        })

        const body = {
            "id": 99,
            "userName": "Tobias"
        }
        const response = await server.post("/appointments").set("Authorization", `Bearer ${token}`).send(body);

        expect(response.status).toBe(200)


    });
});

describe("Post /appointments/:id", () => {
    it("Should respond with unauthorized error if not logged in", async () => {
        const id = 3;
        const response = await server.post(`/appointments/${id}`);
        expect(response.status).toBe(401)
    });

    it ("Should respond with Unauthorized if provided appointment does not belong to user ", async () => {
        const token = await generateValidToken();
        const body = {
            id: 133
        }
        const appointment = await server.post("/appointments").set("Authorization", `Bearer ${token}`).send(body)

        const token2 = await generateValidToken();

        const response = await server.post(`/appointments/${body.id}`).set("Authorization", `Bearer ${token2}`);

        expect(response.status).toBe(401)
    });

    it( "Should remove the userId of the appointment if it belongs to the user", async () => {
        const token = await generateValidToken();
        const body = {
            id: 101
        }

        const appointment = await server.post("/appointments").set("Authorization", `Bearer ${token}`).send(body)
        const response = await server.post(`/appointments/${body.id}`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(httpStatus.OK)
    });
    it("Should responde with NotFoundError if provided id does not exiss", async () => {
        const token = await generateValidToken();
        const response = await server.post(`/appointments/9999`).set("Authorization", `Bearer ${token}`);
        expect(response.status).toBe(404)
    })
})

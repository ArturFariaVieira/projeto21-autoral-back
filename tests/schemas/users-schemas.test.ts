import { createUserSchema } from "../../src/schemas/users-schemas";
import faker from "@faker-js/faker";

describe("createUserSchema", () => {
  const generateValidInput = () => ({
    name: faker.name.findName(),
    telNumber: faker.phone.phoneNumber("##9########"),
    email: faker.internet.email(),
    password: faker.internet.password(6),
  });

  describe("when name is not present", () => {
    it("should return error if name is not present", () => {
      const input = generateValidInput();
      delete input.name;

      const { error } = createUserSchema.validate(input);

      expect (error).toBeDefined();
    });

    
  })

  describe("when telNumber is not valid", () => {
    it("should return error if telNumber not provided", () => {
      const input = generateValidInput();
      delete input.telNumber;

      const { error } = createUserSchema.validate(input);

      expect (error).toBeDefined();

    });

    it("should return error if telNumber's format is not valid", () => {
      const input = generateValidInput();
      input.telNumber = 'abcd123asd0'


      const { error } = createUserSchema.validate(input);

      expect (error).toBeDefined();

    })
  })

  describe("when email is not valid", () => {
    it("should return error if email is not present", () => {
      const input = generateValidInput();
      delete input.email;

      const { error } = createUserSchema.validate(input);

      expect(error).toBeDefined();
    });

    it("should return error if email does not follow valid email format", () => {
      const input = generateValidInput();
      input.email = faker.lorem.word();

      const { error } = createUserSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  describe("when password is not valid", () => {
    it("should return error if password is not present", () => {
      const input = generateValidInput();
      delete input.password;

      const { error } = createUserSchema.validate(input);

      expect(error).toBeDefined();
    });

    it("should return error if password is shorter than 6 characters", () => {
      const input = generateValidInput();
      input.password = faker.lorem.word(5);

      const { error } = createUserSchema.validate(input);

      expect(error).toBeDefined();
    });
  });

  it("should return no error if input is valid", () => {
    const input = generateValidInput();

    const { error } = createUserSchema.validate(input);

    expect(error).toBeUndefined();
  });
});

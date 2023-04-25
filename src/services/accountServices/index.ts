import appointmentRepository from "../../repositories/appointment-repository";
import { unauthorizedError } from "../../errors/unauthorized-error";
import userRepository from "../../repositories/user-repository";
import { notFoundError } from "../../errors/not-found-error";
import authenticationService from "../../services/authServices/authServices";
import bcrypt from "bcrypt";
import { exclude } from "../../utils/prisma-utils";
import invalidCredentialsError from "../../services/authServices/errors";
import sessionRepository from "../../repositories/session-repository";


async function getMyappointments(userId: number) {

    if (!userId) throw unauthorizedError();

    return await appointmentRepository.findUserAppointments(userId);

}

async function updateProfile(userId: number, name: string, telNumber: string, email: string, password: string | null, newPassword: string | null) {

    const user = await userRepository.findbyId(userId)
    if (!user) throw notFoundError();
    let params = {
        name,
        telNumber,
        email,
    };
    console.log(params)

    if(newPassword) {
        const pass = await bcrypt.compare(password, user.password)
        if(!pass) throw invalidCredentialsError()
        const newHashedPassword = await bcrypt.hash(newPassword, 12);
        params["password"] = newHashedPassword;
    }

    const newuser = await userRepository.updateProfile(userId, params)
    return exclude(newuser, "password")

}

async function logOut(userId: number, token: string){

    const lastsession = await sessionRepository.findLast(userId);


    return await sessionRepository.deleteSession(lastsession[0].id);
}

const accountServices = {
    getMyappointments,
    updateProfile,
    logOut
}


export default accountServices;
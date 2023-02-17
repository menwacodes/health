import {hash, compare} from "bcryptjs"

export const hashPassword = async (password) => await hash(password, 12);

export const passwordsEqual = async (plainTextPw, hashedPw) => {
    // console.log("plainTextPw",plainTextPw)
    return await compare(plainTextPw, hashedPw);
}
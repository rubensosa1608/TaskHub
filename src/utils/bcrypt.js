import bcrypt from 'bcrypt'

export async function hashPassword (password) {

    try {

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    return hashedPassword

    } catch (err) {
        throw new Error('Error hashing the password')
    }

}

export async function comparePassword (password, hash) {

    return await bcrypt.compare(password, hash)

}
import { z } from 'zod'
import { hashSync } from 'bcryptjs'

export const userSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin:z.boolean().default(false),
    password: z.string().min(4).max(120).transform((pass) => {
        return hashSync(pass, 10)
    })
}).strip()

export const usersUpdateSchema = userSchema.partial().strip()

export const returnUserSchema = userSchema.extend({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullish(),

}).omit({password: true})

export const returnAllUsersSchema = returnUserSchema.array()


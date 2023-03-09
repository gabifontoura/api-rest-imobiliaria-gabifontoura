import { z } from 'zod'

export const userSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin:z.boolean().default(false),
    password: z.string().max(120)
}).strip()

export const usersUpdateSchema = userSchema.partial()

export const returnUserSchema = userSchema.extend({
    id: z.number().int(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
    deletedAt: z.date().or(z.string()).nullish(),
}).omit({password: true})

export const returnAllUsersSchema = returnUserSchema.array()


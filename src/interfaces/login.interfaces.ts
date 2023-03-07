import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schemas";

export type tLogin = z.infer<typeof createLoginSchema>
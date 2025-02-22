import process from 'node:process'

import { z } from 'zod'

const envValitatorSchema = z.object({
  ENV1: z.string(),
  ENV2: z.number(),
})

export const environments = envValitatorSchema.parse({
  ENV1: process.env.VITE_APP_ENV1,
  ENV2: Number(process.env.VITE_APP_ENV2),
})

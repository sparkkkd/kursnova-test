import { z } from 'zod'

export const presentFormSchema = z.object({
	name: z.string().min(1, 'Введите имя'),
	phone: z.string().min(1, 'Введите номер телефона'),
	email: z.string().email('Введите корректный email'),
})

export type presentFormValues = z.infer<typeof presentFormSchema>

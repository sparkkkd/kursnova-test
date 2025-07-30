import { z } from 'zod'

export const tryFormSchema = z.object({
	name: z.string().min(1, 'Введите имя'),
	phone: z.string().min(1, 'Введите номер телефона'),
	role: z.enum(['student', 'parent'], {
		errorMap: () => ({ message: 'Выберите роль' }),
	}),
})

export type tryFormValues = z.infer<typeof tryFormSchema>

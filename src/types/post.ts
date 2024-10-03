import { z } from 'zod'

export const postSchema = z.object({
    id: z.string().optional(),
    post: z.string({
        required_error: "Tidak boleh kosong",
        invalid_type_error: "Tipe data harus berupa teks",
    })
        .min(3, 'Minimal 3 huruf')
        .max(100, 'Maksimal 100 huruf')
        .trim()
})

export type Post = z.infer<typeof postSchema>
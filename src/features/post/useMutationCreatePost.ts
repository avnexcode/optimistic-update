import { axiosInstance } from "@/lib/axios";
import { Post } from "@/types/post";
import { useMutation } from "@tanstack/react-query";

export const useMutationCreatePost = ({ onSuccess }: { onSuccess: () => void }) => useMutation({
    mutationKey: ['posts'],
    mutationFn: async (body: Post) => {
        const response = await axiosInstance.post('/posts', body)
        return response
    },
    onSuccess
})
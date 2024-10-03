import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const useMutationDeletePost = ({ onSuccess }: { onSuccess: () => void }) => useMutation({
    mutationKey: ['posts'],
    mutationFn: async (id: string) => {
        const response = await axiosInstance.delete(`/posts/${id}`)
        return response.data.data
    },
    onSuccess
})
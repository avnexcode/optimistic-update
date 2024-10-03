import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useQueryPost = () => useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
        const response = await axiosInstance.get('/posts')
        return response.data.data
    }
})
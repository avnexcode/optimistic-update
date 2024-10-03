import { Post } from "@/types/post"
import prisma from "../db"

export const findAllPosts = async () => {
    const response = await prisma.post.findMany()
    return response
}

export const insertPost = async (newPostData: Omit<Post, 'id'>) => {
    const response = await prisma.post.create({
        data: newPostData
    })
    return response
}
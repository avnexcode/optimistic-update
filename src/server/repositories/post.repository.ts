import { Post } from "@/types/post"
import prisma from "../db"

export const findAllPosts = async () => {
    return await prisma.post.findMany()
}

export const findPostID = async (id: string) => {
    return await prisma.post.findUnique({ where: { id } })
}

export const insertPost = async (newPostData: Post) => {
    return await prisma.post.create({
        data: newPostData
    })
}

export const updatePost = async (postData: Post, id: string) => {
    return await prisma.post.update({
        data: postData,
        where: { id }
    })
}

export const destroyPost = async (id: string) => {
    return await prisma.post.delete({ where: { id } })
}
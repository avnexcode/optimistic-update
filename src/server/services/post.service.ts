import { Post } from "@prisma/client"
import * as postRepository from "../repositories/post.repository"

export const getAllPosts = async () => {
    const response = await postRepository.findAllPosts()
    return response
}

export const createPost = async (newPostData: Omit<Post, 'id'>) => {
    const response = await postRepository.insertPost(newPostData)
    return response
}
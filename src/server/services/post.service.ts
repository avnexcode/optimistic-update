import { Post } from "@/types/post"
import * as repository from "../repositories/post.repository"

export const getAllPosts = async () => {
    const response = await repository.findAllPosts()
    return response
}

export const getPostID = async (id: string) => {
    const response = await repository.findPostID(id)
    if (!response) {
        throw new Error('Post not found')
    }
    return response
}

export const createPost = async (newPostData: Post) => {
    const response = await repository.insertPost(newPostData)
    return response
}

export const editPost = async (postData: Post, id: string) => {
    await getPostID(id)
    const response = await repository.updatePost(postData, id)
    return response
 }


export const deletePost = async (id: string) => {
    await getPostID(id)
    const response = await repository.destroyPost(id)
    return response
}
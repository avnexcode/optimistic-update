import { NextApiRequest, NextApiResponse } from "next";
import * as postService from "../services/post.service";
export const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await postService.getAllPosts()
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success retrieved all post data',
            data,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: `${error}`,
        });
    }
}

export const postPost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { post } = req.body
    try {
        const data = await postService.createPost({ post })
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success retrieved all post data',
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: `${error}`,
        });
    }
}
// export const putPost = async (req: NextApiRequest, res: NextApiResponse) => { }
// export const patchPost = async (req: NextApiRequest, res: NextApiResponse) => { }
// export const deletePost = async (req: NextApiRequest, res: NextApiResponse) => { }
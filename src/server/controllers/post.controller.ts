import { NextApiRequest, NextApiResponse } from "next";
import * as service from "../services/post.service";
export const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await service.getAllPosts()
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
        const data = await service.createPost({ post })
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

export const deletePost = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query

    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            status: false,
            statusCode: 400,
            message: 'Invalid or missing post ID',
        });
    }

    try {
        const data = await service.deletePost(id)
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success deleted post data',
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
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as postContoller from "@/server/controllers/post.controller"
import { type Post } from "@/types/post";

type Response = {
    status: boolean
    statusCode: number
    message: string
    data?: Post[] | Post
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>,
) {
    const { method } = req
    switch (method) {
        case "GET":
            return await postContoller.getPosts(req, res)
        case "POST":
            return await postContoller.postPost(req, res)
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
            return res.status(405).end(`Method ${method} Not Allowed`)
    }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as controller from "@/server/controllers/post.controller"
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
            return await controller.getPosts(req, res)
        case "POST":
            return await controller.postPost(req, res)
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            return res.status(405).end(`Method ${method} Not Allowed`)
    }
}

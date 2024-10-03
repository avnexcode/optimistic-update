import { Post } from "@/types/post"

type CardProps = {
    post: Post
}
export default function Card(props: CardProps) {
  return <span className="text-red-400 text-center">{props.post.post}</span>
}

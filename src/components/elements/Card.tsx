import { Post } from "@/types/post"
import { Button } from "../ui/button"
import { FaRegTrashCan } from "react-icons/fa6";
import { useMutationDeletePost } from "@/features/post/useMutationDeletePost";
import { toast } from "@/hooks/use-toast";
import { useQueryPost } from "@/features/post";

type CardProps = {
  post: Post
  className?: string
}

export default function Card(props: CardProps) {
  const { refetch } = useQueryPost()
  const { mutate } = useMutationDeletePost({
    onSuccess: () => {
      refetch()
      toast({
        title: 'Success',
        description: 'Success deleted post'
      })
    }
  })

  return (
    <div className="flex w-full justify-center gap-3 items-center">
      <span className={`text-red-400 text-center ${props.className}`}>{props.post.post}</span>
      <Button variant={'destructive'} size={'sm'} onClick={() => { mutate(props.post.id!) }}><FaRegTrashCan /></Button>
    </div>
  )
}

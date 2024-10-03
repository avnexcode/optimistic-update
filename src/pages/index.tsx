import Card from "@/components/elements/Card";
import Container from "@/components/layouts/Container";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useQueryPost } from "@/features/post";
import { Post } from "@/types/post";
import { useForm } from "react-hook-form";
import { postSchema } from "@/types/post";
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutationCreatePost } from "@/features/post/useMutationCreatePost";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/components/elements/Loader";
const renderElement = (posts: Post[]) => posts?.map(post => <Card key={post.id} post={post} />)

export default function Home() {
  const { toast } = useToast()
  const { data, isLoading, refetch } = useQueryPost()
  const { mutate, isPending, variables } = useMutationCreatePost({
    onSuccess: () => {
      refetch()
      toast({
        title: "Success",
        description: "Success Created New Post",
      })
      form.reset();
    }
  })
  const form = useForm<Post>({
    defaultValues: {
      post: ""
    },
    resolver: zodResolver(postSchema)
  })
  const onSubmit = (data: Post) => mutate(data)
  return (
    <Container className="flex flex-col gap-20">
      <div className="flex w-full justify-center gap-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post</FormLabel>
                  <FormControl>
                    <Input placeholder="input here..." {...field} />
                  </FormControl>
                  <FormDescription>This is your public display post.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" className="disabled:bg-red-700" disabled={isPending}>{isPending ? 'Pending' : 'Post'}</Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="flex flex-col w-full gap-5">
        {isLoading ? <Loader /> : renderElement(data)}
        {isPending && <Card className="text-red-200" post={variables} />}
      </div>
    </Container>
  );
}

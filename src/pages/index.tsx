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
const renderElement = (posts: Post[]) => posts?.map(post => <Card key={post.id} post={post} />)

export default function Home() {
  const { data, isLoading } = useQueryPost()
  const form = useForm<Post>({ 
    defaultValues: {
      post: ""
    },
    resolver: zodResolver(postSchema) 
  })
  const onSubmit = (data: Post) => console.log(data)
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
              <Button type="submit">Post</Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="flex flex-col w-full gap-5">
        {isLoading ? <h1>Loading...</h1> : renderElement(data)}
      </div>
    </Container>
  );
}

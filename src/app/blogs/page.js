import { posts } from "@/constant";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="h-5/6   border-2 px-4 flex flex-col items-center">
      <h1 className="text-2xl my-4 underline underline-offset-2 ">
        Recent Blogs
      </h1>
      {posts.map((post) => {
        return (
          <div className=" w-1/2 my-2 border-b-2">
            <Link href={`/blogs/${post.id}`}>
              <h1 className="font-bold">{post.title}</h1>
              <p className="pb-2">
                {post.body.slice(0, 80)}{" "}
                <span className="text-blue-500">Read More...</span>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

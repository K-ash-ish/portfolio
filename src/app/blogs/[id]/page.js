import { posts } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage({ params }) {
  const { id } = params;
  const otherPosts = posts.filter((post) => {
    return post.id !== Number(id);
  });
  return (
    <div className="min-h-[90%] px-4 flex justify-center">
      <div className=" w-[40%] my-2">
        <div className=" flex items-center w-fit py-4 ">
          <Image
            height={80}
            width={80}
            src={"/profile-pic.png"}
            className="rounded-full"
          />
          <div className="px-2">
            <h1 className="font-bold text-xl">Sample Blog</h1>
            <p className="text-gray-400">@Kashish</p>
          </div>
        </div>
        <p className="pb-2 leading-6 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          reiciendis ab voluptatibus adipisci, delectus aut eveniet ipsam sequi
          quis voluptas ex perferendis blanditiis fuga assumenda nihil
          praesentium eligendi at veritatis.
        </p>
      </div>
      <div className="w-1/5 flex flex-col pl-8 border-l-2">
        <h1 className="text-xl my-4 font-semibold text-blue-500">
          Other Blogs
        </h1>
        <div className="flex flex-col items-start ">
          {otherPosts.map((post) => {
            return (
              <Link
                className="underline decoration-blue-400 underline-offset-2 decoration-1 py-1"
                href={`/blogs/${post.id}`}
              >
                {post.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

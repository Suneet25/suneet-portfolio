import Link from "next/link";
import type { Post } from "@/data/site";

export function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="-mx-3 flex flex-col">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            href={`/posts/${post.slug}`}
            className="group flex flex-col items-center gap-1 rounded-xl px-3 py-3 text-center transition-colors hover:bg-surface sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:text-left"
          >
            <span className="font-medium transition-colors group-hover:text-accent">{post.title}</span>
            <time dateTime={post.date} className="shrink-0 text-sm text-tertiary">
              {formatDate(post.date)}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}

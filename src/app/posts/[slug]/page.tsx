import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/site";
import Section from "@/components/Section";
import { formatDate } from "@/components/PostList";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <Section index={0} className="mb-10">
        <Link href="/posts" className="text-sm text-secondary hover:text-accent">
          ← All posts
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight">{post.title}</h1>
        <time dateTime={post.date} className="mt-2 block text-sm text-tertiary">
          {formatDate(post.date)}
        </time>
      </Section>
      <Section index={1} className="space-y-5 leading-relaxed text-primary/85">
        {post.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Section>
    </article>
  );
}

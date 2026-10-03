import type { Metadata } from "next";
import { posts } from "@/data/site";
import PageHeader from "@/components/PageHeader";
import PostList from "@/components/PostList";
import Section from "@/components/Section";

export const metadata: Metadata = { title: "Posts", description: "Thoughts on software, design, and more." };

export default function PostsPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <PageHeader title="Posts" subtitle="Thoughts on software, design, and what I'm learning." />
      <Section index={1}>
        <PostList posts={sorted} />
      </Section>
    </>
  );
}

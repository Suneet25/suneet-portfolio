import Link from "next/link";

export default function NotFound() {
  return (
    <div className="animate-in py-20 text-center">
      <p className="text-gradient text-6xl font-bold">404</p>
      <p className="mt-4 text-secondary">This page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block text-sm text-accent hover:underline">
        Go home
      </Link>
    </div>
  );
}

// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to 10 Minute School!</h1>
      <Link href="/product/ielts-course">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          View IELTS Course
        </button>
      </Link>
    </main>
  );
}

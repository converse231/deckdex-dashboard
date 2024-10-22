import { ThemeButton } from "@/components/custom/ThemeButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Link href="/login" className="text-primary underline">
        Go to login
      </Link>
    </div>
  );
}

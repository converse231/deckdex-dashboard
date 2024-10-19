import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import SocialLoginOptions from "./components/SocialLoginOptions";

function LoginPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full gap-8 px-4">
      <div className="text-2xl font-bold text-center">
        Sign in to your account
      </div>
      <LoginForm />
      <SocialLoginOptions />
      <p className="text-sm text-muted-foreground">
        Don&apos;t have an account yet?{"  "}
        <Link href="#" className="text-primary font-bold hover:underline">
          Signup
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;

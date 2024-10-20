import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import SocialLoginOptions from "./components/SocialLoginOptions";

function LoginPage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full gap-8 px-4 bg-background overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/40 via-primary/20 to-transparent blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-2/3 h-2/3 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/30 via-cyan-500/20 to-transparent blur-3xl" />
      <h1 className="text-3xl font-bold text-center relative z-10">
        Log in to your{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
          Deckdex
        </span>
        .
      </h1>
      <LoginForm />
      <SocialLoginOptions />
      <p className="text-sm text-muted-foreground relative z-10">
        Don&apos;t have an account yet?{"  "}
        <Link href="/signup" className="text-primary font-bold hover:underline">
          Signup
        </Link>
      </p>
    </section>
  );
}

export default LoginPage;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          className="bg-secondary w-full"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <label htmlFor="email">Password</label>
          <Link
            href="#"
            className="text-sm text-primary hover:underline font-bold"
          >
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Input
            type={isVisible ? "text" : "password"}
            id="password"
            name="password"
            className="bg-secondary w-full"
          />
          <Button
            variant="ghost"
            className="absolute right-0 top-0 h-full"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
      <Link href="/dashboard" className="w-full">
        <Button className="text-white w-full">Sign in</Button>
      </Link>
    </form>
  );
}

export default LoginForm;

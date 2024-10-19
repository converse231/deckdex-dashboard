"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeIcon, EyeOff } from "lucide-react";
import React, { useState } from "react";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex flex-col gap-4 z-50"
    >
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="email" className="text-muted-foreground text-sm">
          Username
        </label>
        <Input
          type="text"
          id="username"
          name="username"
          className="bg-secondary w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="email" className="text-muted-foreground text-sm">
          Email address
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          className="bg-secondary w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="email" className="text-muted-foreground text-sm">
          Password
        </label>
        <div className="relative">
          <Input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            name="password"
            className="bg-secondary w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="ghost"
            className="absolute right-0 top-0 h-full"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="email" className="text-muted-foreground text-sm">
          Confirm password
        </label>
        <div className="relative">
          <Input
            type={isConfirmPasswordVisible ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className="bg-secondary w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="ghost"
            className="absolute right-0 top-0 h-full"
            onClick={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
          >
            {isConfirmPasswordVisible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignupForm;

"use client";
import { Ilogin } from "@/types";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { redirect } from "next/dist/server/api-utils";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const login: Ilogin = {
      email,
      password,
    };
    console.info("login", login);
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(login),
    });
    console.info("response.ok", response.ok);
    if (!response.ok) {
      const errorResponse = await response.json();
      setError(errorResponse.error);
    } else {
      router.push("/home");
    }
  };

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <form className="min-w-[400px]" onSubmit={loginHandler}>
          <Card className="p-4">
            <h1 className="text-2xl mb-6 text-center">True North Challenge</h1>
            <Input
              className="mb-4"
              type="email"
              label="Email"
              labelPlacement="outside"
              isInvalid={isInvalid}
              color={isInvalid ? "danger" : "default"}
              errorMessage="Please enter a valid email"
              onValueChange={setEmail}
              required
            />
            <Input
              className="mb-8"
              type="password"
              label="Password"
              labelPlacement="outside"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              required
            />
            {error && (
              <p className="text-center mb-4 mt-[-1rem] text-red-600">
                {error}
              </p>
            )}

            <Button color="primary" type="submit">
              Log In
            </Button>
          </Card>
        </form>
      </section>
    </main>
  );
}

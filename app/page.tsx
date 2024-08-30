"use client";
import { ErrorResponse, Ilogin } from "@/types";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import React, { useContext } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserCreditContext } from "@/components/UserCreditProvider";

export default function Login() {
  const router = useRouter();
  const { newCredit }: any = useContext(UserCreditContext);

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const login: Ilogin = {
      email,
      password,
    };
    setLoading(true);
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(login),
    });
    if (!response.ok) {
      const errorResponse: ErrorResponse = await response.json();
      setError(errorResponse.message);
      setLoading(false);
    } else {
      const creditResponse = await response.json();
      newCredit(creditResponse.credit);
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
        <Card className="p-4 min-w-[400px]" onSubmit={loginHandler} as="form">
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
            onValueChange={setPassword}
            required
          />
          {error && (
            <p className="text-center mb-4 mt-[-1rem] text-red-600">{error}</p>
          )}

          <Button color="primary" type="submit" isDisabled={loading}>
            Log In
          </Button>
        </Card>
      </section>
    </main>
  );
}

"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/Icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  TAuthCredentialsValidator,
  AuthCredentialsValidator,
} from "@/lib/validator/account-credentials-validator";
import { trpc } from "@/trpc/client";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  // const { data } = trpc.anyApiRoute.useQuery();
  // console.log(data);

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({});

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    mutate({ email, password });
  };

  return (
    <>
      <div className="realtive container flex flex-col items-center justify-center pt-20 lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl"> Create Account</h1>
            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
            >
              Already have an account ? Sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="you@mail.com"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="Password">Password</Label>
                  <Input
                    {...register("password")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="password"
                    type="password"
                  />
                </div>
                <Button className="py-2">Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

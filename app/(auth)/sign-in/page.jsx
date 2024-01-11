import Title from "@/app/components/Title";
import Card from "@/app/components/Card";
import React from "react";
import SignInForm from "@/app/components/SignInForm";
import Link from "next/link";

const Signin = () => {
  return (
    <section className="card-wrapper">
      <Card variation="card-auth">
        <Title addClasses="text-3xl mb-10" level={1}>
          Sign in to your account
        </Title>
        <SignInForm />

        <Link className="text-sky-800 text-sm hover:text-teal-500" href="/forgot-password">
          Forgot your password?
        </Link>
        <div className="text-sm text-center mt-10">
          Don't have an account?{" "}
          <Link className="text-sky-800 hover:text-teal-500" href="/sign-up">
            Sign up
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default Signin;

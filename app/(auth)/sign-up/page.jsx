import Card from "@/app/components/Card";
import SignUpForm from "@/app/components/SignUpForm";
import Title from "@/app/components/Title";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <div className="card-wrapper">
      <Card variation="card-auth">
        <Title addClasses="text-3xl mb-10" level="1">
          Register
        </Title>

        <SignUpForm />
      </Card>
      <div className="text-sm text-center mt-10">
        Have an account?{" "}
        <Link className="text-sky-800 hover:text-teal-500" href="/sign-in">
          Sing in
        </Link>
      </div>
    </div>
  );
};

export default Signin;

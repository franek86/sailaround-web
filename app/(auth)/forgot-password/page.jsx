import Card from "@/app/components/Card";
import ResetPasswordForm from "@/app/components/ResetPasswordForm";
import Title from "@/app/components/Title";
import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
  return (
    <section className="card-wrapper">
      <Card variation="card-auth">
        <Title addClasses="text-3xl" level={1}>
          Reset password
        </Title>
        <div className="text-sm my-5">Enter the email address associated with your account and we'll send you a link to reset your password.</div>

        <ResetPasswordForm />

        <div className="text-sm text-center mt-5">
          Return to{" "}
          <Link className="text-sky-800 hover:text-teal-500" href="/sign-in">
            Sing in
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default ForgotPassword;

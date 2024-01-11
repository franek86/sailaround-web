import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const ResetPasswordForm = () => {
  return (
    <form>
      <FormInput id="email" type="email" placeholder="Enter your email" label="email" />

      <Button classVariation="btn btn--primary">Continue</Button>
    </form>
  );
};

export default ResetPasswordForm;

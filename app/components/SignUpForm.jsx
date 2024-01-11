import FormInput from "./FormInput";
import Button from "./Button";
import FormCheckout from "./FormCheckout";

const SignUpForm = () => {
  return (
    <form>
      <FormInput type="text" name="firstname" id="firstname" placeholder="Enter your first name" label="Enter first name" />
      <FormInput type="text" name="lastname" id="lastname" placeholder="Enter your last name" label="Enter last name" />
      <FormInput type="email" name="email" id="email" placeholder="Enter your email address" label="Enter email" />
      <FormInput type="password" name="password" id="password" placeholder="Enter your password" label="Enter password" autocomplete="new-password" />
      <FormInput type="password" name="repeat-password" id="repeat-password" placeholder="Repeat your password" label="Repeat password" autocomplete="new-password" />
      <FormCheckout label="By signing in or creating an account, you agree to our Terms and conditions" />
      <Button classVariation="btn btn--primary">Register</Button>
    </form>
  );
};

export default SignUpForm;

import FormInput from "./FormInput";
import { Button } from "./Button";

const SignInForm = () => {
  return (
    <form>
      <FormInput type="email" name="email" id="email" placeholder="Enter your email address" label="Enter email" />
      <FormInput type="password" name="password" id="password" placeholder="Enter your password" label="Enter password" autocomplete="current-password" />
      <Button classVariation="btn btn--primary">Login</Button>
    </form>
  );
};

export default SignInForm;

import React from "react";
import { RegisterPageType } from "./Register.models";

const Register: RegisterPageType = (props) => {
  const {} = props;

  return (
    <div>
      <div>Sup sup in register</div>
    </div>
  );
};

Register.getInitialProps = async () => {
  return {
    showLayout: true,
    meta: {
      title: "Donkey",
      page: "Register",
      description: "Your friendly donkey app!",
    },
  };
};

export default Register;

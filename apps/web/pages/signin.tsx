import {
  withAuthUserTokenSSR,
  AuthAction,
  withAuthUser,
} from "next-firebase-auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {
  clientSignInWithEmailAndPassword,
  clientSignInWithGoogle,
} from "../utils/firebase";

type FormType = {
  email: string;
  password: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormType>();
  const { mutate } = useMutation<any, any, FormType>(
    clientSignInWithEmailAndPassword,
    {
      onError: (error) => {
        if (error.errors) {
          const messages: any[] = error.errors.map((e) => e.message);
          if (messages.includes("EMAIL_NOT_FOUND")) {
            setError("email", {
              message: "Email not found",
            });
          }
        }
      },
    }
  );
  const onSubmit = (data: FormType) => {
    mutate({
      email: data.email,
      password: data.password,
    });
  };

  const handleGoogleSignIn = () => {
    clientSignInWithGoogle();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />

      <button type="submit">Sign in</button>
      <button onClick={handleGoogleSignIn} type="button">
        Google
      </button>
    </form>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(SignIn);

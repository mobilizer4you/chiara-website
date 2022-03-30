import {
  withAuthUserTokenSSR,
  AuthAction,
  withAuthUser,
} from "next-firebase-auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import HomePageLayout from "../components/Layout/HomePageLayout";
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
    console.log("🚀 ~ file: signin.tsx ~ line 43 ~ onSubmit ~ data", data);
    // mutate({
    //   email: data.email,
    //   password: data.password,
    // });
  };

  const onError = (error: any) => {
    console.log("🚀 ~ file: signin.tsx ~ line 51 ~ onError ~ error", error);
  };

  const handleGoogleSignIn = () => {
    clientSignInWithGoogle();
  };

  return (
    <>
      <header
        style={{
          minHeight: 700,
        }}
      >
        <div className="container">
          <div className="shape" id="moon"></div>
          <h1 className="big-title mb-5">Sign in</h1>
          <div className="col-md-5 col-xl-5 col-lg-5 mx-auto signup-container">
            <form
              className="authenticate"
              onSubmit={handleSubmit(onSubmit, onError)}
              id="signin-form"
            >
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="i.e - johndoe@gmail.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="********"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })}
                />
              </div>
            </form>
            <div className="text-center btn-holder">
              <button type="submit" className="btn-theme" form="signin-form">
                Sign in
              </button>
            </div>
            <p className="text-center mt-5">
              Don&apos;t have an account?{" "}
              <a
                href="/signup"
                style={{
                  color: "#02d9ff",
                  fontWeight: 600,
                }}
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </header>
      <section className="animate-container">
        <div className="floating1"></div>
        <div className="floating2"></div>
      </section>
    </>
  );
};

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(SignIn);

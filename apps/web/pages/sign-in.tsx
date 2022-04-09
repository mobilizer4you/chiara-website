import {
  withAuthUserTokenSSR,
  AuthAction,
  withAuthUser,
} from "next-firebase-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

import HomePageLayout from "../components/Layout/HomePageLayout";
import {
  clientSignInWithEmailAndPassword,
  clientSignInWithGoogle,
} from "../utils/firebase";
import { ROUTES } from "../utils/utils";

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
  const router = useRouter();

  const onSubmit = async (data: FormType) => {
    try {
      const info = await clientSignInWithEmailAndPassword({
        email: data.email,
        password: data.password,
      });
      router.push(ROUTES.APP.SEARCH);
    } catch (error) {
      console.log("🚀 ~ file: sign-in.tsx ~ line 38 ~ onSubmit ~ error", error);
      if (error.code === "auth/email-already-in-use") {
        setError("email", {
          message: error.message ?? "Email already in use",
        });
      }
      if (error.code === "auth/wrong-password") {
        setError("password", {
          message: error.message ?? "Invalid password",
        });
      }
      if (error.code === "auth/too-many-requests") {
        setError("password", {
          message: error.message ?? "Too many requests. Try again later",
        });
      }
    }
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
              onSubmit={handleSubmit(onSubmit)}
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
                    validate: (value) => {
                      const regex = new RegExp(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      );
                      if (!regex.test(value)) {
                        return "Email is not valid";
                      }
                    },
                  })}
                />
                {errors && errors.email ? <p>{errors.email.message}</p> : null}
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
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors && errors.password ? (
                  <p>{errors.password.message}</p>
                ) : null}
              </div>
            </form>
            <div className="text-center btn-holder">
              <button type="submit" className="btn-theme" form="signin-form">
                Sign in
              </button>
            </div>
            <p className="text-center mt-5">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" passHref>
                <a
                  style={{
                    color: "#02d9ff",
                    fontWeight: 600,
                  }}
                >
                  Sign up
                </a>
              </Link>
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

// export const getServerSideProps = withAuthUserTokenSSR({
//   whenAuthed: AuthAction.REDIRECT_TO_APP,
// })();

// export default withAuthUser({
//   whenAuthed: AuthAction.REDIRECT_TO_APP,
// })(SignIn);

export default SignIn;

import {
  withAuthUserTokenSSR,
  AuthAction,
  withAuthUser,
} from "next-firebase-auth";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import HomePageLayout from "../components/Layout/HomePageLayout";
import {
  clientCreateUserWithEmailAndPassword,
  clientSignInWithEmailAndPassword,
} from "../utils/firebase";

type FormType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<FormType>();
  const { mutate } = useMutation<any, any, FormType>(
    clientCreateUserWithEmailAndPassword,
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
    console.log("🚀 ~ file: sign-up.tsx ~ line 44 ~ onSubmit ~ data", data);
    // mutate({
    //   email: data.email,
    //   password: data.password,
    // });
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
          <h1 className="big-title mb-5">Sign up</h1>
          <div className="col-md-5 col-xl-5 col-lg-5 mx-auto signup-container">
            <form
              id="sign-up-form"
              className="authenticate"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
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
                  id="password"
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
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="form-control"
                  placeholder="********"
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Confirm Password is required",
                    },
                    validate: (value) => {
                      if (value !== getValues("password")) {
                        return "Passwords do not match";
                      }
                    },
                  })}
                />
              </div>
            </form>
            <div className="text-center btn-holder">
              <button form="sign-up-form" className="btn-theme">
                Sign up
              </button>
            </div>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link href="/sign-in" passHref>
                <a
                  style={{
                    color: "#02d9ff",
                    fontWeight: 600,
                  }}
                >
                  Sign in
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

SignUp.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export const getServerSideProps = withAuthUserTokenSSR({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})();

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
})(SignUp);

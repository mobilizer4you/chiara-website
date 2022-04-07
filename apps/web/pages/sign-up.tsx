import { ErrorMessage } from "@hookform/error-message";
import {
  withAuthUserTokenSSR,
  AuthAction,
  withAuthUser,
} from "next-firebase-auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import HomePageLayout from "../components/Layout/HomePageLayout";
import { useStoreUserInformationMutation } from "../generated/graphql";
import {
  clientCreateUserWithEmailAndPassword,
  clientSignInWithEmailAndPassword,
} from "../utils/firebase";
import { loadClient, ROUTES } from "../utils/utils";

type FormType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const [status, setStatus] = React.useState<
    "idle" | "success" | "error" | "loading"
  >("idle");

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm<FormType>();
  const router = useRouter();
  const client = loadClient({});

  const { mutate } = useStoreUserInformationMutation(client, {
    onSuccess: (data) => {
      toast.success("Successfully created user");
      router.push(ROUTES.HOME);
    },
    onError: (error) => {
      console.error(error);
      toast.error("Error creating user");
    },
  });

  const onSubmit = (data: FormType) => {
    setStatus("loading");
    clientCreateUserWithEmailAndPassword({
      email: data.email,
      password: data.password,
    })
      .then((data) => {
        setStatus("success");
        mutate({
          storeUserInput: {
            email: data.user.email,
            username: data.user.displayName,
            id: data.user.uid,
          },
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("email", {
            message: "Email already in use",
          });
        }
      });
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
                {errors && errors.password ? (
                  <p>{errors.password.message}</p>
                ) : null}
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
                {errors && errors.confirmPassword ? (
                  <p>{errors.confirmPassword.message}</p>
                ) : null}
              </div>
            </form>
            <div className="text-center btn-holder">
              <button type="submit" form="sign-up-form" className="btn-theme">
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

export default SignUp;

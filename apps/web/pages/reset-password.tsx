import Link from "next/link";
import React from "react";
import { Wizard, useWizard } from "react-use-wizard";
import { useForm } from "react-hook-form";

import HomePageLayout from "../components/Layout/HomePageLayout";
import { ROUTES } from "../utils/utils";
import {
  clientConfirmPasswordReset,
  clientSendPasswordResetEmail,
} from "../utils/firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

type EmailForm = {
  email: string;
};

const Email = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailForm>();

  const router = useRouter();
  const { mode, oobCode } = router.query;
  const { handleStep, previousStep, nextStep } = useWizard();

  React.useEffect(() => {
    if (oobCode == null) return;

    nextStep();
  }, [oobCode, nextStep]);

  const onSubmit = (data: EmailForm) => {
    toast.promise(clientSendPasswordResetEmail(data.email), {
      error: "Could not send password reset email",
      success: "Password reset email sent",
      loading: "Sending password reset email",
    });
  };
  return (
    <>
      <form
        id="password-reset-email"
        onSubmit={handleSubmit(onSubmit)}
        className="authenticate"
      >
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Enter your email
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            type="email"
            className="form-control"
            placeholder="i.e - johndoe@gmail.com"
          />
          {errors && errors.email ? <p>{errors.email.message}</p> : null}
        </div>
      </form>
      <div className="text-center btn-holder">
        <button form="password-reset-email" className="btn-theme">
          Reset Password
        </button>
      </div>
    </>
  );
};

type ResetPasswordForm = {
  password: string;
  confirmPassword: string;
};

const Password = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ResetPasswordForm>();
  const router = useRouter();
  const { mode, oobCode } = router.query;

  const onSubmit = (data: ResetPasswordForm) => {
    toast.promise(
      clientConfirmPasswordReset({
        code: oobCode as string,
        newPassword: data.password,
      }),
      {
        error: "Could not reset password",
        success: "Password reset successful",
        loading: "Resetting password",
      }
    );
  };

  return (
    <>
      <form
        id="password-reset"
        onSubmit={handleSubmit(onSubmit)}
        className="authenticate"
      >
        <div className="form-group">
          <label htmlFor="Password" className="form-label">
            Setup a new password
          </label>
          <input
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
            type="password"
            className="form-control"
            placeholder="********"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is required",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: (value) => {
                const { password } = getValues();
                return value === password || "Passwords do not match";
              },
            })}
            type="password"
            className="form-control"
            placeholder="********"
          />
        </div>
      </form>
      <div className="text-center btn-holder">
        <button form="password-reset" className="btn-theme">
          Update Password
        </button>
      </div>
    </>
  );
};

const RestPassword = () => {
  return (
    <>
      <header
        style={{
          minHeight: "700px",
        }}
      >
        <div className="container">
          <div className="shape" id="moon"></div>
          <h1 className="big-title mb-5">Forgot Password</h1>
          <div className="col-md-5 col-xl-5 col-lg-5 mx-auto signup-container">
            <Wizard>
              <Email />
              <Password />
            </Wizard>

            <p className="text-center mt-5">
              Take me to the moon /{" "}
              <Link href={ROUTES.SIGN_IN} passHref>
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

RestPassword.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default RestPassword;

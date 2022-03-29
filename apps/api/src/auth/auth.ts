import { PrismaClient, User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import cuid from "cuid";
import * as jwt from "jsonwebtoken";
import { LoginRequest, LoginResponse } from "../generated/resolversTypes";

const SALT_ROUND = 10;

const prisma = new PrismaClient();
interface HandleExistingUser extends LoginRequest {
  user: User;
}

const modifiedUser = (user: User) => {
  const { emailVerified, ...rest } = user;
  const newUser = { ...rest, emailVerified: String(emailVerified) };
  return newUser;
};

const generateToken = (user: User) => {
  const token = jwt.sign(
    {
      iat: Date.now(),
      exp: Date.now() + 1000 * 60 * 60 * 24 * 7,
    },
    process.env.JWT_SECRET as string,
    {
      algorithm: "HS512",
    }
  );
  return token;
};

const handleNewUser = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const passwordHash: string = await bcrypt.hash(password, SALT_ROUND);
  const accountId = cuid();
  const userId = cuid();

  const user = await prisma.user.create({
    data: {
      id: userId,
      passwordHash: passwordHash,
      email,
      accounts: {
        create: {
          id: accountId,
          type: "primary",
          provider: "credentials",
          providerAccountId: accountId,
        },
      },
      sessions: {
        create: {
          id: cuid(),
          sessionToken: cuid(),
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        },
      },
    },
  });

  const response: LoginResponse = {
    status: {
      success: true,
      message: "User created",
    },
    user: { ...modifiedUser(user) },
    token: generateToken(user),
  };

  return response;
};

const handleExistingUser = ({
  email,
  password,
  user,
}: HandleExistingUser): LoginResponse => {
  return {
    status: {
      success: true,
      message: "User found",
    },
    user: modifiedUser(user),
    token: generateToken(user),
  };
};

const login = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user != null) {
    const response = handleExistingUser({ email, password, user });
    return response;
  }

  const response = await handleNewUser({ email, password });
  return response;
};

export { login };

import { GetUserInformationResponse } from "./../generated/resolversTypes";
import { PrismaClient, User, AuthProvider } from "@prisma/client";
import {
  StoreUserInformationResponse,
  StoreUserInput,
} from "../generated/resolversTypes";
import { prisma } from "../util";

const storeUserInformation = async ({
  username,
  email,
  id,
  authProvider,
}: StoreUserInput): Promise<StoreUserInformationResponse> => {
  const user = await prisma.user.create({
    data: {
      id,
      username,
      email,
      authProvider,
    },
  });

  return {
    status: {
      success: true,
      message: "Successfully stored user information",
    },
    user,
  };
};

const getUserInformation = async (
  userId: string
): Promise<GetUserInformationResponse> => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (user == null) {
    return {
      status: {
        success: false,
        message: "User not found",
      },
    };
  }
  return {
    status: {
      success: true,
      message: "Successfully retrieved user information",
    },
    user,
  };
};

export { storeUserInformation, getUserInformation };

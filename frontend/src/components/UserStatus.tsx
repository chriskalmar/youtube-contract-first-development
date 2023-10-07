import React from "react";
import { assertNever } from "../utils";
import { User } from "../backend-api";

type Props = {
  status: User["status"];
};

export const UserStatus = ({ status = "Happy" }: Props) => {
  switch (status) {
    case "Happy":
      return "🥳";
    case "Sad":
      return "😢";
    default:
      assertNever(status);
      return null;
  }
};

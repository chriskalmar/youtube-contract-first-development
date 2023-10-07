import React from "react";
import { User } from "../types";
import { assertNever } from "../utils";

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

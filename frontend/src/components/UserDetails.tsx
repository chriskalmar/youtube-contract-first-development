import React from "react";
import { useUserById } from "../hooks/users";
import { User } from "../types";
import { Card } from "./Card";

type Props = {
  id?: User["id"];
};

export const UserDetails = ({ id }: Props) => {
  const { data, isLoading } = useUserById(id);

  if (!id) {
    return (
      <Card title="User Details">
        <div className="p-8 text-center text-gray-500">Select user ☝️</div>
      </Card>
    );
  } else if (isLoading) {
    return (
      <Card title="User Details">
        <div className="p-8 text-center text-gray-500">Loading ...</div>
      </Card>
    );
  } else if (!data) {
    return (
      <Card title="User Details">
        <div className="p-8 text-center text-red-500">Not found</div>
      </Card>
    );
  }

  return (
    <Card title={`User Details for ID: ${id}`}>
      <>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
              id="grid-name"
              type="text"
              value={data.name}
            />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-email"
              type="email"
              value={data.email}
            />
          </div>
        </div>

        <button
          type="button"
          className="border border-purple-500 bg-purple-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-purple-600 focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </>
    </Card>
  );
};

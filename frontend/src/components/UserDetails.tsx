import React from "react";
import { useUserById } from "../hooks/users";
import { User } from "../types";

const UserDetailsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-6 w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">User Details</h2>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};

type Props = {
  id?: User["id"];
};

export const UserDetails = ({ id }: Props) => {
  const { data, isLoading } = useUserById(id);

  if (!id) {
    return (
      <UserDetailsWrapper>
        <div className="p-8 text-center text-gray-500">Select user ☝️</div>
      </UserDetailsWrapper>
    );
  } else if (isLoading) {
    return (
      <UserDetailsWrapper>
        <div className="p-8 text-center text-gray-500">Loading ...</div>
      </UserDetailsWrapper>
    );
  } else if (!data) {
    return (
      <UserDetailsWrapper>
        <div className="p-8 text-center text-gray-500">Not found</div>
      </UserDetailsWrapper>
    );
  }

  return (
    <UserDetailsWrapper>
      <>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-name"
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
              for="grid-email"
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
    </UserDetailsWrapper>
  );
};

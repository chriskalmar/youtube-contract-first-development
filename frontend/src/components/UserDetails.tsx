import React from "react";
import { useUserById } from "../hooks/users";

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

export const UserDetails = () => {
  const { data, isLoading } = useUserById(1);

  if (isLoading) {
    return <UserDetailsWrapper>Loading ...</UserDetailsWrapper>;
  }

  if (!data) {
    return <UserDetailsWrapper>Not found</UserDetailsWrapper>;
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
      </>
    </UserDetailsWrapper>
  );
};

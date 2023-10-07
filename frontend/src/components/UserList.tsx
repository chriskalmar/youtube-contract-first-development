import React from "react";
import { useUsers } from "../hooks/users";
import { UserStatus } from "./UserStatus";

export const UserList = () => {
  const { data, isLoading } = useUsers();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <section className="bg-purple-100 text-gray-600 h-screen px-4">
      <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Users</h2>
          </div>
          <div className="p-3">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-700 bg-purple-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">ID</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Status</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {data?.map((user) => (
                  <tr key={user.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="font-medium text-gray-800">{user.id}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{user.name}</div>
                    </td>
                    <td className="p-2 ">
                      <div className="text-lg text-center">
                        <UserStatus status={user.status} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

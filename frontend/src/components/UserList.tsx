import React from "react";
import { useUsers } from "../hooks/users";
import { UserStatus } from "./UserStatus";
import { Card } from "./Card";

type Props = {
  onUserSelect: (id: number) => void;
};

export const UserList = ({ onUserSelect }: Props) => {
  const { data, isLoading } = useUsers();

  if (isLoading) {
    return (
      <Card title="Users">
        <div className="p-8 text-center text-gray-500">Loading ...</div>
      </Card>
    );
  } else if (!data) {
    return (
      <Card title="Users">
        <div className="p-8 text-center text-red-500">
          Ooops! Something went wrong 🙈
        </div>
      </Card>
    );
  }

  return (
    <Card title="Users">
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-700 bg-purple-50">
          <tr>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">ID</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">First Name</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-left">Last Name</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div className="font-semibold text-center">Status</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">
          {data?.map((user) => (
            <tr key={user.id} onClick={() => onUserSelect(user.id)}>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">{user.id}</div>
              </td>
              <td className="p-2 whitespace-nowrap  font-semibold">
                <div className="text-left">{user.firstName}</div>
              </td>
              <td className="p-2 whitespace-nowrap text-purple-700 font-semibold">
                <div className="text-left">{user.lastName}</div>
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
    </Card>
  );
};

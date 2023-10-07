import React from "react";
import { UserDetails } from "../components/UserDetails";
import { UserList } from "../components/UserList";
import { User } from "../types";

export default function Home() {
  const [selectedUser, setSelectedUser] = React.useState<
    User["id"] | undefined
  >();

  return (
    <main>
      <section className="bg-purple-100 text-gray-600 h-screen">
        <div className="flex flex-col h-full pt-12">
          <UserList onUserSelect={setSelectedUser} />
          <UserDetails id={selectedUser} />
        </div>
      </section>
    </main>
  );
}

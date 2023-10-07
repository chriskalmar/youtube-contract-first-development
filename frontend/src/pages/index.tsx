import { UserDetails } from "../components/UserDetails";
import { UserList } from "../components/UserList";

export default function Home() {
  return (
    <main>
      <section className="bg-purple-100 text-gray-600 h-screen">
        <div className="flex flex-col h-full">
          <UserList />
          <UserDetails />
        </div>
      </section>
    </main>
  );
}

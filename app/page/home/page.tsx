import Navbar from "../../components/navBar";
import FaceCard from "@/app/components/faceCards";

const getUsers = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=10");
  const data = await res.json();
  return data.users;
};

export default async function HomePage() {
  const users = await getUsers();
  console.log(users);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center"></div>
      <Navbar />

      {/* Main Content */}
      <div className="flex space-x-4 overflow-x-auto px-4 w-full mt-10 max-w-5xl scrollbar-hide">
        {users.map((user: any) => (
          <FaceCard key={user.id} name={user.firstName + " " + user.lastName} />
        ))}
      </div>
    </main>
  );
}

// "use client";

import Navbar from "../../components/navBar";
import FaceCard from "../../components/faceCards";
import Count from "../../components/count";
import MyCalendar from "../calendar/page";
// import { useState } from "react";

const getUsers = async () => {
  try {
    const res = await fetch("https://dummyjson.com/users?limit=10", {
      next: { revalidate: 0 },
    });
    if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);

    const data = await res.json();
    return data.users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
};

export default async function HomePage() {
  const users = await getUsers();
  // const [count, setCount] = useState(0);
  // console.log(users);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center"></div>
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl font-bold text-blue-600">
          🏠 This is the Home Page
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 overflow-x-auto px-4 w-full mt-10 mb-10 max-w-5xl pb-6 scrollbar-hide">
        {users.map((user: any) => (
          <FaceCard key={user.id} name={user.firstName + " " + user.lastName} />
        ))}
      </div>

      <Count />
      {/* <MyCalendar /> */}
    
    </main>
  );
}

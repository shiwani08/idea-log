import React from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserPageProps {
  params: Promise<{ id: string }>;
}

async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    // havent understood this caching part!
    cache: "no-store",
  }); // no-store prevents caching in Next.js
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params; // await params first to get the actual object
  const user = await getUser(id);

  return (
    <main>
      <h1>User Details</h1>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
      {/* Render other details as needed */}
    </main>
  );
}

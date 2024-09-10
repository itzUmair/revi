"use client";

import { getAllUsers } from "@/data-access";
import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";
import { Component1Icon } from "@radix-ui/react-icons";

export type User = {
  user_id: number;
  first_name: string;
  last_name: string | null;
  type: string;
  email: string;
};

function Users() {
  const [users, setUsers] = useState<User[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getUser() {
      const data = await getAllUsers();
      setUsers(data);
      setLoading(false);
    }
    getUser();
  }, []);

  return (
    <div className="px-8">
      {users && <UsersTable userData={users} />}
      {loading && (
        <Component1Icon className="animate-spin" width={30} height={30} />
      )}
    </div>
  );
}

export default Users;

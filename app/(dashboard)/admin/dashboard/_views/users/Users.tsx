"use client";

import { getAllUsers } from "@/data-access";
import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";

export type User = {
  user_id: number;
  first_name: string;
  last_name: string | null;
  type: string;
  email: string;
};

function Users() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    async function getUser() {
      const data = await getAllUsers();
      setUsers(data);
    }
    getUser();
  }, []);

  return <div className="px-8">{users && <UsersTable userData={users} />}</div>;
}

export default Users;

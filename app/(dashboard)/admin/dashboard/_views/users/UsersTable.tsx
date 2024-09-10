import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { User } from "./Users";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Input } from "@/components/ui/input";

function UsersTable({ userData }: { userData: User[] }) {
  const [currentUsers, setCurrentUsers] = useState(userData);
  const [currentUserType, setCurrentUserType] = useState<string>("all");
  const originalUsers = userData;

  const filterUsers = (type: string) => {
    setCurrentUserType(type);
    if (type === "all") {
      setCurrentUsers(originalUsers);
      return;
    }
    const tempUsers = originalUsers.filter((user) => user.type === type);
    setCurrentUsers(tempUsers);
  };

  const handleSearch = (query: string) => {
    const tempUsers = originalUsers.filter((user) => {
      if (
        user.first_name.includes(query) ||
        user.last_name?.includes(query) ||
        user.email.includes(query) ||
        user.user_id.toString().includes(query)
      ) {
        if (currentUserType === "all") {
          return user;
        } else {
          if (user.type === currentUserType) {
            return user;
          }
        }
      }
    });

    setCurrentUsers(tempUsers);
  };

  return (
    <div>
      <section className="my-4 flex items-center gap-x-2">
        <div className="flex items-center gap-x-2">
          Filter By:
          <Select onValueChange={filterUsers}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="User type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-x-2">
          Search:
          <Input type="search" onChange={(e) => handleSearch(e.target.value)} />
        </div>
      </section>
      <ScrollArea className="w-full h-[80vh]">
        <Table>
          <TableHeader className="font-bold">
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
            {currentUsers.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell className="font-medium">{user.user_id}</TableCell>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name ? user.last_name : "-"}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}

export default UsersTable;

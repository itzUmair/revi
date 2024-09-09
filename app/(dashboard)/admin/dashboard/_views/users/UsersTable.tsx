import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "./Users";

function UsersTable({ userData }: { userData: User[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userData.map((user) => (
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
  );
}

export default UsersTable;

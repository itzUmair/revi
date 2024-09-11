"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronsUpDownIcon } from "lucide-react";
import { deleteUser } from "./actions";
import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User } from "@/types/types";

async function handleUserDelete(user: User) {
  await deleteUser(user.user_id);
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "user_id",
    header: "User ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
    cell: ({ row }) => {
      const value: string = row.getValue("last_name");
      return <div>{value ? value : "-"}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "user_type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ChevronsUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <Dialog>
          <DialogTrigger className="bg-red-500 px-2 py-1 rounded-md text-white hover:bg-red-600">
            Delete
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete the
                user&apos;s account.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-x-2">
              <DialogClose asChild>
                <Button type="button" variant={"secondary"}>
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose>
                <Button
                  variant={"destructive"}
                  type="button"
                  onClick={() => handleUserDelete(user)}
                >
                  Confirm
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

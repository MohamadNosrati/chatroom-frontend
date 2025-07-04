"use client";
import useGetAllUsers from "@/lib/services/userServices";
import useUserStore from "@/lib/stores/userStore";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

const Users = () => {
  const { data, isLoading } = useGetAllUsers();
  const { filters,setFilters,resetFilters } = useUserStore();
  return (
    <section className="flex mx-auto p-10 bg-white">
        {!isLoading ?       <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>userName</TableColumn>
          <TableColumn>email</TableColumn>
          <TableColumn>role</TableColumn>
          <TableColumn>createdAt</TableColumn>
          <TableColumn>updatedAt</TableColumn>
        </TableHeader>

        <TableBody>
          {data?.data?.users?.length ? (
            data?.data?.users?.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user?.userName}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.role}</TableCell>
                <TableCell>
                  {new Date(user?.createdAt).toDateString()}
                </TableCell>
                <TableCell>
                  {new Date(user?.updatedAt).toDateString()}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>Tony Reichert</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table> : <Spinner className="text-red-400" color="danger" size="lg"/>}
    </section>
  );
};

export default Users;

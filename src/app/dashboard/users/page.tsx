"use client";
import useGetAllUsers from "@/lib/services/userServices";
import useUserStore from "@/lib/stores/userStore";
import socket from "../../../../socket.config";
import {
  Input,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const Users = () => {
  const { filters, setFilters, resetFilters } = useUserStore();
  const { data, isLoading } = useGetAllUsers(filters);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (key: string, value: any) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
      const newSearchParams = params.toString();
      router.push(`${pathName}?${newSearchParams}`);
    }
  };

  useEffect(() => {
    if (
      searchParams.get("userName") &&
      searchParams.get("userName") !== filters?.userName
    ) {
      setFilters({
        ...filters,
        userName: searchParams.get("userName") || "",
      });
      if (
        searchParams.get("email") &&
        searchParams.get("email") !== filters?.email
      ) {
        setFilters({
          ...filters,
          email: searchParams.get("email") || "",
        });
      }
    }
  }, [searchParams]);




  return (
    <section className=" mx-auto p-10 bg-white">
      <div className="my-10 bg-gray-600 flex gap-8">
        <div>
          <label htmlFor="email">email</label>
          <input
            value={filters?.email}
            onChange={(e) => {
              setFilters({
                ...filters,
                email: e.target.value,
              });
              createQueryString("email", e.target.value);
            }}
            type="text"
            id="email"
            className="w-48 px-2 h-10 bg-black text-white block mt-1 rounded-xl "
          />
        </div>
        <div>
          <label htmlFor="userName">userName</label>
          <input
            value={filters?.userName}
            onChange={(e) => {
              setFilters({
                ...filters,
                userName: e.target.value,
              });
              createQueryString("userName", e.target.value);
            }}
            type="text"
            id="userName"
            className="w-48 px-2 h-10 bg-black text-white block mt-1 rounded-xl "
          />
        </div>
        <div>
          <label htmlFor="active">Active or Deactive</label>
          <select
            value={
              filters?.isActive === true
                ? 1
                : filters?.isActive === false
                ? 0
                : undefined
            }
            onChange={(e) =>
              setFilters({
                ...filters,
                isActive:
                  +e.target.value === 1
                    ? true
                    : +e.target.value === 0
                    ? false
                    : undefined,
              })
            }
            id="active"
          >
            <option value={undefined}>all options</option>
            <option value={1}>Active</option>
            <option value={0}>DeActive</option>
          </select>
        </div>
      </div>
      {!isLoading ? (
        <Table aria-label="Example static collection table">
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
        </Table>
      ) : (
        <Spinner className="text-red-400" color="danger" size="lg" />
      )}
    </section>
  );
};

export default Users;

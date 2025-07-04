import { useQuery } from "@tanstack/react-query";
import { userRoutes } from "../routes/backendRoutes";
import axiosInstance from "./base";
import { IUser } from "../types/users";

const useGetAllUsers = (params?: any) => {
  const { data, isLoading } = useQuery({
    queryKey: [userRoutes.getAllUsers()],
    queryFn: () =>
      axiosInstance.get<
        IBaseResponse<{
          users: IUser[];
        }>
      >(userRoutes.getAllUsers(), {
        params: params,
      }),
  });
  return {
    data: data?.data,
    isLoading: isLoading,
  };
};

export default useGetAllUsers;

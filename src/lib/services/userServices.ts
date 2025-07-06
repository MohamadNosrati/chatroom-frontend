import { useQuery } from "@tanstack/react-query";
import { userRoutes } from "../routes/backendRoutes";
import axiosInstance from "./base";
import { IUser, IUserParams } from "../types/users";

const useGetAllUsers = (params?: Partial<IUserParams>) => {
  const { data, isLoading } = useQuery({
    queryKey: [userRoutes.getAllUsers(),params],
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

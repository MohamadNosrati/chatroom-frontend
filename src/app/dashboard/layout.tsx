import { logout } from "@/lib/actions/auth/authActions";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  
  return (
    <>
      <div className="my-5">
        <form action={logout}>
          <button className="bg-red-500 text-white rounded-2xl px-4 py-2">
            logout
          </button>
        </form>
      </div>
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;

import { AiOutlineLeft } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="flex flex-col px-2">
        <AiOutlineLeft className="text-2xl absolute top-3" />
        <div className="pt-12 h-screen">
        <Outlet />
        </div>
    </div>
  );
};

export default LoginLayout;

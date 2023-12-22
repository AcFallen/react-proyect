import { Link, useNavigate } from "react-router-dom";

// Import icons
import { BsCart2 } from "react-icons/bs";

import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Header = () => {
  const { user, cleanUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    cleanUser();
    navigate("/login");
  };
  return (
    <>
      <header className="py-8 px-6 bg-slate-50 text-black">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold uppercase hover:text-violet-900 text-4xl">
            tech store
          </h1>
          <nav className="flex gap-3 items-center font-medium">
            <Link
              to="/"
              className="px-3 hover:text-violet-900 hover:border-violet-900 hover:underline"
            >
              Inicio
            </Link>
            <Link
              to="/products"
              className="px-3 hover:text-violet-900 hover:border-violet-900 hover:underline"
            >
              Productos
            </Link>
            {user?.email && (
              <>
                <Link
                  to="/editProfile"
                  className="px-3 hover:text-violet-900 hover:border-violet-900 hover:underline"
                >
                  Editar Perfil
                </Link>
                <div className="font-bold">Welcome, {user.fullname}</div>
                <button onClick={handleLogout}>Logout</button>
              </>
            )}

            {!user?.email && (
              <>
                <Link
                  to="/login"
                  className="px-3 hover:text-violet-900 hover:border-violet-900 hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 hover:text-violet-900 hover:border-violet-900 hover:underline"
                >
                  Registrate!
                </Link>
              </>
            )}

            <Link
              to="/store"
              className="px-3 hover:text-violet-900 hover:border-violet-900 text-lg "
            >
              <BsCart2 />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

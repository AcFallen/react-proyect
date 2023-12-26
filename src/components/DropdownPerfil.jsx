import { Dropdown, Avatar } from "keep-react";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const DropdownPerfil = () => {
  const { user, cleanUser } = useContext(UserContext);

  const handleLogout = () => {
    cleanUser();
    navigate("/login");
  };

  return (
    <Dropdown
      label={user.fullname}
      size="sm"
      type="primary"
      dismissOnClick={true}
      trigger="hover"
      className="text-white bg-violet-600 hover:bg-violet-600"
    >
      <Dropdown.Item>
        <Link to="/editProfile">Editar Perfil </Link>
      </Dropdown.Item>
      <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

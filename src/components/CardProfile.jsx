import { Avatar, Card } from "keep-react";
import { X } from "phosphor-react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import Swal from "sweetalert2";

import { deleteUser } from "../services/users";

const CardProfile = () => {
  const navigate = useNavigate();
  const { user, cleanUser } = useContext(UserContext);

  const handleDelete = async () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar cuenta!",
    }).then((result) => {
      if (result.isConfirmed) {

        deleteUser(user.id)
        cleanUser()     

        Swal.fire({
          title: "Eliminado!",
          text: "Eliminaste tu cuenta.",
          icon: "success",
        });

        navigate('/')
      }
    });
  };

  return (
    <>
      <Card className="max-w-[250px] p-6">
        <Card.Container className="flex items-center justify-center">
          <Avatar
            shape="circle"
            img="https://randomuser.me/api/portraits/men/50.jpg"
            statusPosition="bottom-right"
            size="2xl"
          />
        </Card.Container>
        <Card.Container className="text-center">
          <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">
            Perfil
          </Card.Title>
          <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">
            Tipo de usuario
          </Card.Title>
        </Card.Container>
        <Card.Container className="circled mx-auto flex max-w-[220px] items-center justify-center divide-x divide-metal-200 rounded-md border border-metal-200 p-1 md:p-2">
          <button onClick={handleDelete}>
            Eliminar cuenta
            <Card.Link
              className="flex items-center justify-center px-3 py-1"
              icon={<X size={24} color="#C40E0E" weight="fill" />}
              href="#"
            />
          </button>
        </Card.Container>
      </Card>
    </>
  );
};

export default CardProfile;

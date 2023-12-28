import { useState, useEffect, } from "react";

import CardProfile from "./CardProfile";
import Swal from 'sweetalert2'

import { UserContext } from "../context/UserContext";
import { useContext } from "react";

import { updateUser } from "../services/users";
import { useNavigate } from "react-router-dom";

const FormEditProfile = () => {

  const DEFAULT_FORM_VALUE= {
    id: "",
    fullname: "",
    surnames: "",
    dni: "",
    cellPhone: "",
    email: "",
    password: ""
  }

  const navigate = useNavigate()
  const { user, cleanUser } = useContext(UserContext);
  const [form, setForm] = useState([DEFAULT_FORM_VALUE]);

  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleChange = (e) => {
    // Actualizar el estado del formulario mientras el usuario edita el formulario
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    
    const res = await updateUser(user.id,form.fullname,form.surnames,form.password)

    if (res) {
      // Redireccionamos al listado de '/invoices'
      Swal.fire({
        title: 'Guardado Exitoso',
        text: 'Se guardó correctamento!',
        icon: 'success'
      })

      cleanUser()
      navigate('/login')
    } else{
      // Motramoss un mensaje de error
    }
  };

  return (
    <>
      <div className="relative flex flex-col m-6 space-y-8 bg-slate-50 shadow-2xl shadow-violet-900 rounded-2xl md:flex-row md:space-y-0">
        <form
          className="flex flex-col justify-center p-8 md:p-14"
          onSubmit={handleSubmit}
        >
          <span className="mb-3 text-4xl font-bold">Editar Perfil</span>
          <label className="mb-2 text-md flex flex-col">
            Nombre
            <input
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
              type="text"
              name="fullname"
              required
              placeholder="Ingresa tu nombre"
              onChange={handleChange}
              value={form.fullname}
            />
          </label>

          <label className="mb-2 text-md flex flex-col ">
            Primer y segundo apellido
            <input
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
              type="text"
              name="surnames"
              required
              placeholder="Ingresa tu primer y segundo apellido"
              onChange={handleChange}
              value={form.surnames}
            />
          </label>

          <label className="mb-2 text-md flex flex-col">
            DNI
            <input
              disabled
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
              type="number"
              name="dni"
              required
              placeholder="DNI"
              onChange={handleChange}
              value={form.dni}
            />
          </label>

          <label className="mb-2 text-md flex flex-col">
            Celular
            <input
              disabled
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
              type="number"
              name="cellPhone"
              required
              placeholder="Numero de celular"
              onChange={handleChange}
              value={form.cellPhone}
            />
          </label>

          <label className="mb-2 text-md flex flex-col">
            Email
            <input
              
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
              type="email"
              name="email"
              required
              placeholder="example@gmail.com"
              onChange={handleChange}
              value={form.email}
            />
          </label>

          <label className="mb-2 text-md flex flex-col">
            Contraseña
            <input
              className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
              type="password"
              name="password"
              required
              onChange={handleChange}
              value={form.password}
            />
          </label>

          <input
            className="w-full bg-violet-400 text-white p-2 rounded-lg mb-6 hover:bg-violet-900 hover:text-white"
            type="submit"
            value="Guardar Cambios"
          ></input>
        </form>

        <div className="flex justify-center items-center pr-8">
          <CardProfile></CardProfile>
        </div>
      </div>
    </>
  );
};

export default FormEditProfile;

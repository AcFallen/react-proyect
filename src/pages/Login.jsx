import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }
  return (
    <>
     
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <button onClick={handleBack} className="text-violet-600 text-4xl">
        <BsArrowLeftCircle />
      </button>
        <div className="relative flex flex-col m-6 space-y-8 bg-slate-50 shadow-2xl shadow-violet-900 rounded-2xl md:flex-row md:space-y-0">
          
          <form className="flex flex-col justify-center p-8 md:p-14">

            <span className="mb-3 text-4xl font-bold">Inicia Sesion</span>

            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div className="flex justify-center w-full py-4">
              <span className="font-bold text-md">¿Has olvidado tu contraseña?</span>
            </div>
            <button
              className="w-full bg-violet-400 text-white p-2 rounded-lg mb-6 hover:bg-violet-900 hover:text-white"
            >
              Iniciar sesión
            </button>
            <button disabled
              className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-violet-900 hover:text-white"
            >
              <img src="public\google.svg" alt="img" className="w-6 h-6 inline mr-2" />
              Inicia sesión con Google
            </button>
            <div className="text-center text-gray-400">
              ¿No tienes una cuenta? 
              <span className="font-bold text-black"> Registrate gratis</span>
            </div>
          </form>
          
          <div className="relative">
            <img
              src="public\image.jpg"
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
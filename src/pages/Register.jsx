

const Register = () => {
  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-slate-50'>
        <div className="relative flex flex-col m-6 space-y-8 bg-slate-50 shadow-2xl shadow-violet-900 rounded-2xl md:flex-row md:space-y-0">
          <form className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Registrate</span>
            <label className="mb-2 text-md flex flex-col">
              Nombre
              <input className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
                type="text"
                name="fullname"
                required
                placeholder="Ingresa tu nombre" />
            </label>

            <label className="mb-2 text-md flex flex-col ">
              Primer y segundo apellido
              <input className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
                type="text"
                name="surnames"
                required
                placeholder="Ingresa tu primer y segundo apellido" />
            </label>

            <label className="mb-2 text-md flex flex-col">
              DNI
              <input className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
                type="number"
                name="dni"
                required
                placeholder="DNI" />
            </label>

            <label className="mb-2 text-md flex flex-col">
              Celular
              <input className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
                type="number"
                name="cellPhone"
                required
                placeholder="Numero de celular" />
            </label>

            <label className="mb-2 text-md flex flex-col">
              Email
              <input className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
                type="email"
                name="email"
                required
                placeholder="example@gmail.com" />
            </label>

            <label className="mb-2 text-md flex flex-col">
              Contraseña
              <input className="w-full p-2 border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 border"
                type="password"
                name="password"
                required />

            </label>

            <div className="w-full p-2 flex gap-4">
              <input 
                type="checkbox"
                id="privacyPolicies"
                name="policies"
              />
              <label
                htmlFor="privacyPolicies">Acepto los términos y condiciones de TECH STORE <br /> y autorizo la política de privacidad. </label>

            </div>
            <input className="w-full bg-violet-400 text-white p-2 rounded-lg mb-6 hover:bg-violet-900 hover:text-white"
              type="submit"
              value="Registrate">
            </input>

          </form>

          <div className="relative">
            <img className="w-[400px] h-full hidden rounded-r-2xl md:block  object-cover"
              src="https://images.unsplash.com/photo-1559969143-b2defc6419fd?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="registerimg" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Register
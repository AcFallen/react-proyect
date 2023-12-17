import { Link } from "react-router-dom"

// Import icons
import { BsCart2 } from "react-icons/bs";


const Header = () => {
    return (
        <>
            <header className="py-8 px-6 bg-slate-50 text-black">
                <div className="container mx-auto flex justify-between">
                    <h1 className="font-bold uppercase hover:text-violet-900 text-4xl">tech store</h1>
                    <nav className="flex gap-3 items-center font-medium">
                        <Link to='/' className="border border-black px-3 hover:text-violet-900 hover:border-violet-900">Inicio</Link>
                        <Link to='/products' className="border border-black px-3 hover:text-violet-900 hover:border-violet-900">Productos</Link>
                        <Link to='/login' className="border border-black px-3 hover:text-violet-900 hover:border-violet-900">Login</Link>
                        <Link to='/register' className="border border-black px-3 hover:text-violet-900 hover:border-violet-900">Registrate!</Link>
                        <Link to='/store' className="border border-black rounded-full p-1 hover:text-violet-900 hover:border-violet-900">
                            <BsCart2 />
                        </Link>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header
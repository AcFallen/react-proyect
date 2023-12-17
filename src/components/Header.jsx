import { Link, Outlet } from "react-router-dom"

// Import icons
import { BsCart2 } from "react-icons/bs";


const Header = () => {
  return (
    <>
        <header className="py-4 px-6 bg-violet-900 text-white">
            <div className="container mx-auto flex justify-between">
                <h1 className="font-bold uppercase">tech store</h1>
                <nav className="flex gap-3 items-center">
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/store'>
                        <BsCart2 />
                    </Link>
                </nav>
            </div>
        </header>
        
    </>
  )
}

export default Header
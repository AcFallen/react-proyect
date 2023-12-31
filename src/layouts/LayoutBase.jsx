import { Link, Outlet, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


const LayoutBase = () => {
  return (
    <>
      <Header />
      <main>
            <div className="bg-slate-50">
                <Outlet />
            </div>
      </main>

      <Footer />

    </>
  )
}

export default LayoutBase
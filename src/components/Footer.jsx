import { BsTelephone, BsWhatsapp, BsArchive , BsShop    } from "react-icons/bs";

const Footer = () => {
  return (
    <>
        <footer className="py-4 px-6 bg-violet-900 text-white">
            <div className="container mx-auto flex justify-between">
                <div className="flex flex-col items-center gap-3 text-xl">
                    <BsTelephone />
                    <h3 >Central Telefonica</h3>
                    <p>(050)510-1903</p>
                </div>

                <div className="flex flex-col items-center gap-3 text-xl">
                    <BsWhatsapp />
                    <h3>Ventas por Whatsapp</h3>
                    <p>947165075</p>
                </div>

                <div className="flex flex-col items-center gap-3 text-xl">
                    <BsArchive />
                    <h3>Ventas Online</h3>
                    <a>techstore@gmail.com</a>
                </div>

                <div className="flex flex-col items-center gap-3 text-xl">
                    <BsShop />  
                    <h3>Nuestras Tiendas</h3>
                    <p>Localizanos</p>
                </div>
            </div>

        </footer>

        <div className="py-4 px-6 bg-slate-50 text-violet-900">
            <p className="font-bold">© 2023| Implementado por Roberto Apaza Cornejo</p>
        </div>
    </>
  )
}

export default Footer
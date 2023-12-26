import React from "react";

const Reasons = () => {
  return (
    <section className="py-8 px-6 bg-slate-50 pb-20">
      <div className="container mx-auto flex flex-col gap-10 items-center">
        <div className="text-center px-20">
          <h3 className="font-bold text-4xl mb-8 ">
            {" "}
            ¿Por que comprar en TECH STORE?{" "}
          </h3>
          <p>
            En TECH STORE, nos comprometemos a ofrecer a nuestros clientes la
            mejor experiencia de compra posible. Tenemos una amplia selección de
            productos de alta calidad a precios competitivos. También ofrecemos
            un excelente servicio al cliente y una garantía de satisfacción del
            100%.
          </p>
        </div>
        <div className=" w-[60%] flex gap-20 flex-col md:flex-row">
          <div className="flex flex-col items-center p-6 text-center rounded-xl shadow-md shadow-violet-900">
            <img src="public\icon-check.svg" alt="" width="30" height="30" />
            <h3 className="text-xl font-bold hover:text-violet-900 py-4">
              Recomendaciones
            </h3>
            <p>...</p>
          </div>
          <div className="flex flex-col items-center p-6 text-center rounded-xl shadow-md shadow-violet-900">
            <img src="public\icon-coment.svg" alt="" width="30" height="30" />
            <h3 className="text-xl font-bold hover:text-violet-900 py-4">
              Soporte Premiun
            </h3>
            <p>
              Nuestro servicio de atención al cliente es alta mente eficiente y
              cada día mejoramos para brindar la mejor atención posible.
            </p>
            <p>
              Nuestros clientes nos avalan y no descansamos hasta que cada
              problema se resuelve a su satisfacción.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 text-center rounded-xl shadow-md shadow-violet-900">
            <img src="public\icon-secure.svg" alt="" width="30" height="30" />
            <h3 className="text-xl font-bold hover:text-violet-900 py-4">
              Pago Seguro
            </h3>
            <p>
              Con la seguridad SSL de 128-bits SSL con cifrado avanzado, tiene
              la garantía de que sus compras son seguras.
            </p>
            <p>
              Además, todos nuestros productos y servicios incluyen garantía con
              factura o boleta sincronizado con nuestra base de datos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;

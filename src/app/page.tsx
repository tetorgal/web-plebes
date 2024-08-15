import Head from "next/head";
import Footer from "@/components/ui/Footer";
import Services from "@/components/Services";
import LandingNavbar from "@/components/ui/Navbar";
import { Button, Image } from "@nextui-org/react";
import Testimonials from "@/components/Testimonials";
import Contact from "./pages/contact/page";


export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>Rival Peluquería y Barbería</title>
        <meta
          name="description"
          content="La mejor peluquería y barbería en tu ciudad."
        />
      </Head>
      <LandingNavbar />
      <header
      id="home"
        className="text-center py-10 h-screen flex flex-col justify-center items-end px-12"
        style={{
          backgroundImage: "url(bg-photo.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-end items-end py-6 space-y-6 px-8">
          <h1 className="text-6xl font-extrabold text-slate-200">
            Bienvenido a Rival Peluquería y Barbería
          </h1>
          <h3 className="mt-2 text-3xl font-semibold text-slate-200">
            Los mejores cortes y estilos, solo para ti.
          </h3>
          <Button variant="solid" size="lg">Agenda tu corte ahora</Button>
        </div>
      </header>
      <section className="py-10">
        <Services />
        <Contact/>
        <Testimonials/>
        {/* Aquí irán las secciones como Servicios, Galería, Testimonios */}
      </section>
      <Footer />
    </div>
  );
}

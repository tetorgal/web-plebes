"use client"
import Head from "next/head";
import Footer from "@/components/ui/Footer";
import LandingNavbar from "@/components/ui/Navbar";
import { Button } from "@nextui-org/react";
import Testimonials from "@/components/Testimonials";
import Contact from "./pages/contact/page";
import { useEffect } from 'react'
import  FacebookGallery from "@/components/FacebookGallery";



export default function Home() {


  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);


  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>Plebes Burguer</title>
        <meta
          name="description"
          content="La mejor hamburgueseria de tu ciudad"
        />
      </Head>
      <LandingNavbar />
      <header
        id="home"
        className="text-center py-10 h-screen flex flex-col justify-center items-start px-12"
        style={{
          backgroundImage: "url(bg-photo.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-end items-start py-6 space-y-6 px-8">
          <h1 className="text-6xl font-extrabold text-slate-200">
            Bienvenido a Plebes Burguer
          </h1>
          <h3 className="mt-2 text-3xl font-semibold text-slate-200">
            Más que una hamburguesa
          </h3>
          <Button variant="solid" color="danger" size="lg">Encuentranos aqui</Button>
        </div>
      </header>
      <section className="py-10">
        {/* <Services /> */}
        <section id="contact"> <Contact/> </section> 
        <section id="testimonials"><Testimonials /></section>
       <section id="gallery"><FacebookGallery/> </section> 
      </section>
      <Footer />
    </div>
  );
}

"use client";
import React from "react";
import { Card } from "@nextui-org/react"; // Importing NextUi elements

export default function Contact() {
  return (
    <section className="w-full mx-auto py-24 bg-red-100 flex justify-center items-center">
      <Card className="w-[46rem] py-12">
        <div className="space-y-6 mb-12 w-full">
          <h3 className="text-4xl font-extrabold mb-4 text-center text-balance">
            Aqui estamos ubicados
          </h3>
          <p className="text-center text-xl">
            Ven y prueba la mejor hamburguesa de Durango
          </p>
        </div>
        <div className="max-w-md mx-auto flex justify-center items-center">
          {/* Google Maps iframe */}
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.160313761416!2d-104.64084368837327!3d24.025411278394017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7e391510e07%3A0x6695b240c5736589!2sPlebes%20Burger%20Rodriguez!5e0!3m2!1ses-419!2smx!4v1730749091142!5m2!1ses-419!2smx"
            width="800"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Card>
    </section>
  );
}

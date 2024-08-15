"use client";
import React from "react";
import { useState } from "react";
import { Input, Textarea, Button, Card, DatePicker } from "@nextui-org/react"; // Importing NextUi elements
import { DateValue, now, parseAbsoluteToLocal } from "@internationalized/date";
import { FaCalendar, FaPhone, FaUser } from "react-icons/fa";

export default function Contact() {
  const today = new Date();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = React.useState(
    parseAbsoluteToLocal(today.toISOString())
  );

  const handleAppointment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle appointment submission here
    alert("Appointment scheduled successfully");
  };

  return (
    <section className=" w-full mx-auto py-24 bg-yellow-100 flex justify-center items-center">
      <Card className="w-[46rem] py-12">
        <div className="space-y-6 mb-12 w-full">
          <h3 className="text-4xl font-extrabold mb-4 text-center text-balance">
            Reserva tu Cita
          </h3>
          <p className="text-center text-xl">
            Agenda tu cita con nuestros expertos y luce tu mejor estilo.
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleAppointment} className="space-y-4 w-max">
            <div className="grid grid-cols-2 gap-6">
              <Input
                value={name}
                startContent={<FaUser className="text-lg text-orange-500" />}
                label={"Nombre"}
                onChange={(e) => setName(e.target.value)}
                required
                variant="bordered"
                labelPlacement="outside"
              />

              <Input
                type="phone"
                label="Teléfono"
                startContent={<FaPhone className="text-lg text-orange-500" />}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                variant="bordered"
                labelPlacement="outside"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <DatePicker
                selectorIcon={
                  <FaCalendar className="text-lg text-orange-500" />
                }
                hideTimeZone
                className="max-w-lg text-orange-500"
                granularity="minute"
                label="Fecha y hora"
                value={date}
                labelPlacement="outside"
                variant="bordered"
                onChange={setDate}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 font-normal text-md text-white"
            >
              Confirmar
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
}

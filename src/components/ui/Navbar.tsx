import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";

const LandingNavbar = () => {
  return (
    <Navbar maxWidth="full" isBlurred className="py-3 bg-red-500">
      <NavbarBrand>
        <Link href="/">
        <Image
          src="logo.png"
          alt="Plebes Burger"
          width={80}
          height={80}
          className="my-2"
        />
        </Link>
   
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className="text-xl text-white font-bold" href="/#home">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-xl text-white font-bold"  href="/#services">
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-xl text-white font-bold"  href="/#gallery">
            Galería
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-xl text-white font-bold"  href="/#testimonials">
            Nuestros clientes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-xl text-white font-bold"  href="/#contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button variant="flat"  >
            <Link href="#" color="foreground" className="text-xl text-white font-bold" >Login</Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="text-xl text-white font-bold" >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
};

export default LandingNavbar;

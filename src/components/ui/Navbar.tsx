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
    <Navbar maxWidth="full" isBlurred className="py-3">
      <NavbarBrand>
        <Link href="/">
        <Image
          src="logo.png"
          alt="Rival Peluquería"
          width={180}
          height={160}
          className="mt-4"
        />
        </Link>
   
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/#home">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#services">
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#gallery">
            Galería
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#testimonials">
            Testimonios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#contact">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button variant="ghost">
            <Link href="#">Login</Link>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default LandingNavbar;

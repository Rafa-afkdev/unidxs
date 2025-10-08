import Image from "next/image"; 
import React from "react";
import NavbarMain from "./NavbarMain";
import MainPage from "./main/components/main";

export default function Home() {
  return (
    <div>
  <NavbarMain/>
  <MainPage/>
  </div>
  );
}

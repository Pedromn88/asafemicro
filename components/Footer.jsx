import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="  fixed bottom-0 flex justify-center items-center"
      style={{ background: "#1c1813", minHeight: "100px" }}>
      <Image
        src={"/logo_asafe.webp"}
        width={50}
        quality={100}
        height={50}
        alt={"logo-asafe-digital"}
      />
      <h2 className="text-white my-10"> Realizado por PMN en 2024</h2>
    </footer>
  );
}

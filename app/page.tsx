import { ListBuildings } from "@/components/ListBuildings";
import { City } from "@/components/City";
import { useBuildings } from "@/context/Buildings";
import Image from "next/image";
import { Attributes, Key, ReactNode, useState } from "react";
import { Maps } from "@/components/Map";
import { MapsProvider } from "@/context/Map";
import { Home } from "@/components/Home";


export default function HomePage({children}: {children: ReactNode}) {

  return (
    <main className="flex flex-col h-full w-full">
      <Home />
    </main>
  );
}

import { ListBuildings } from "@/components/ListBuildings";
import { City } from "@/components/City";
import { useBuildings } from "@/context/Buildings";
import Image from "next/image";
import { Attributes, Key, useState } from "react";

export default function Home() {

  return (
    <main className="flex flex-col h-full w-full">

      <City />
      <ListBuildings />
    </main>
  );
}

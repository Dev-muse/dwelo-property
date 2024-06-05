import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoBoxes />
    </div>
  );
}

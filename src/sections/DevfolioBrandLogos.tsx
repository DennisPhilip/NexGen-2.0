"use client";
import Image from "next/image";
import devfolioLogo from "@/assets/images/Devfolio_Logo-White.png";
import polygonLogo from "@/assets/images/Polygon_Logo-White.png";
import ethindiaLogo from "@/assets/images/ethindia-light.png";

export default function DevfolioBrandLogos() {
  return (
    <section className="pb-24 overflow-x-clip">
      <div className="flex flex-row items-center justify-center">
        <Image
          src={devfolioLogo}
          alt="DEVFOLIO LOGO"
          width={192} 
          height={48} 
          className="mx-auto"
        />
        <Image
          src={polygonLogo}
          alt="POLYGON LOGO"
          width={192} 
          height={48} 
          className="mx-auto"
        />
        <Image
          src={ethindiaLogo}
          alt="ETHINDIA LOGO"
          width={192} 
          height={48} 
          className="mx-auto"
        />
      </div>
    </section>
  );
}

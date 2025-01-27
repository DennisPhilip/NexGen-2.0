"use client";
import devfolioLogo from "@/assets/images/Devfolio_Logo-White.png";
import polygonLogo from "@/assets/images/Polygon_Logo-White.png";
import ethindiaLogo from "@/assets/images/ethindia-light.png";

export default function DevfolioBrandLogos() {
  return (
    <section className="pb-24 overflow-x-clip">
      <div className="flex flex-row items-center justify-center">
        <img
          src={devfolioLogo.src}
          alt="DEVFOLIO LOGO"
          width="192"
          height="48"
          className="mx-auto"
        />
        <img
          src={polygonLogo.src}
          alt="POLYGON LOGO"
          width="192"
          height="48"
          className="mx-auto"
        />
        <img
          src={ethindiaLogo.src}
          alt="ETHINDIA LOGO"
          width="192"
          height="48"
          className="mx-auto"
        />
      </div>
    </section>
  );
}

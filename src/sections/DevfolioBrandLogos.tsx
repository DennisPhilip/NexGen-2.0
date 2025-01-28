"use client";
import devfolioLogo from "@/assets/images/Devfolio_Logo-White.png";
import polygonLogo from "@/assets/images/Polygon_Logo-White.png";
import ethindiaLogo from "@/assets/images/ethindia-light.png";

export default function DevfolioBrandLogos() {
  return (
    <section className="md:pb-8 max-md:pt-2 overflow-x-clip">
      <div className="flex flex-col max-md:gap-12 md:flex-row items-center justify-center">
        <img
          src={devfolioLogo.src}
          alt="DEVFOLIO LOGO"
          width="152"
          className="mx-auto"
        />
        <img
          src={polygonLogo.src}
          alt="POLYGON LOGO"
          width="152"
          className="mx-auto"
        />
        <img
          src={ethindiaLogo.src}
          alt="ETHINDIA LOGO"
          width="152"
          className="mx-auto"
        />
      </div>
    </section>
  );
}

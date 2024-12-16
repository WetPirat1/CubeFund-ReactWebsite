import React from "react";
import SocialLinks from "../ui/SocialLinks";
import Logo_footer from "../../assets/Logo_footer";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-center md:text-left">
          <Logo_footer />
          <h3 className="text-lg font-semibold">Cube Fund Invest</h3>
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
}

import React from "react";
import SocialLinks from "../ui/SocialLinks";
import Logo_footer from "../../assets/Logo_footer";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        <div className="flex gap-2">
          <Logo_footer />
          <h3 className="">Cube Fund Invest</h3>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}

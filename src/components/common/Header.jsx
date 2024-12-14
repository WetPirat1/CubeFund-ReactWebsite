import SocialLinks from "../ui/SocialLinks";
import TelegramLink from "../ui/TelegramLink";
import Logo_nav from "../../assets/Logo_nav";

export default function Header() {
  return (
    <header className=" max-w-5xl mx-auto mt-8 mb-60">
      <nav className="flex justify-between mb-8">
        <a href="/">
          <Logo_nav />
        </a>
        <SocialLinks />
      </nav>

      <div className="text-center mt-60">
        <h1 className="text-7xl mb-5">Cube Fund Invest</h1>
        <TelegramLink />
      </div>
    </header>
  );
}

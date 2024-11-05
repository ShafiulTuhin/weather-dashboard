import { useState } from "react";

import SearchLocation from "./Search";
import Favourite from "./Favourite";
import FavouriteList from "./FavouriteList";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const [showFavModal, setShowFavModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <a href="./index.html">
          <img className="h-9" src={Logo} alt="Weather App" />
        </a>

        <div className="flex items-center gap-4 relative">
          <SearchLocation />
          <Favourite onShow={() => setShowFavModal(!showFavModal)} />
          {showFavModal && <FavouriteList />}
        </div>
      </nav>
    </header>
  );
};

export default Header;

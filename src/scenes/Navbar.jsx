import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

// selected page and individual link styling
const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-green" : ""}
      hover:text-green transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

// navbar desktop and mobile
const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  pageSections,
}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-dark-grey border-b-2 border-bg-shade shadow-lg";
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img src="../assets/logo-white.png" alt="logo" className="h-10" />

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-leagueSpartan text-xl font-semibold capitalize">
            {pageSections.map((page) => {
              return (
                <Link
                  key={page}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              );
            })}
          </div>
        ) : (
          <button
            className="rounded-full  bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src="../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}

        {/*  MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img src="../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div
              className="flex flex-col gap-10 ml-[33%] text-2xl 
            text-deep-blue capitalize"
            >
              {pageSections.map((page) => {
                return (
                  <Link
                    key={page}
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

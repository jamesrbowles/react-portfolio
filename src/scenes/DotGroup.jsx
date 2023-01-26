import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage, pageSections }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {pageSections.map((page) => {
        return (
          <AnchorLink
            className={`${
              selectedPage === page ? selectedStyles : "bg-dark-grey"
            }
      w-3 h-3 rounded-full`}
            href={`#${page}`}
            onClick={() => setSelectedPage(page)}
          />
        );
      })}
    </div>
  );
};

export default DotGroup;

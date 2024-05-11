import React, { useState } from "react";

const NavDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" mb-2  text-gray-500 dark:text-gray-400
            group-hover:text-red-600 dark:group-hover:text-red-500"
        width="44"
        height="44"
        fill="gray"
        class="bi bi-arrow-up-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
      </svg>
    </>
  );
};

export default NavDrawer;
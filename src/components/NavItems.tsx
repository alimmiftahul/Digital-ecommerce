"use client";

import React, { useState } from "react";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return <div className="flex h-full gap-4">NavItems</div>;
};

export default NavItems;

import React from "react";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">{children}</div>;
};

export default Wrapper;

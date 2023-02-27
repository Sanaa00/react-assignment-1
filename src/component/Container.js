import React from "react";

function Container({ children }) {
  return (
    <div className="max-width-[1200] py-0 my-0 px-32 mx-auto">{children}</div>
  );
}

export default Container;

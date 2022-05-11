import React from "react";

const Error = ({ message }) => {
  return (
    <p className="text-white text-center py-1 rounded-md bg-red-700">
      {message}
    </p>
  );
};

export default Error;

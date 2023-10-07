import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Card = ({ children, title }: Props) => {
  return (
    <div className="my-6 w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <div className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};

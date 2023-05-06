import React from "react";

export default function Thead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="text-sm font-normal text-gray-800 dark:text-white">
      {children}
    </thead>
  );
}

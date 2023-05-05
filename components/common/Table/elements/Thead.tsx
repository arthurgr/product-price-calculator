import React from "react";

export default function Thead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="text-sm font-semibold text-gray-900 dark:text-white">
      {children}
    </thead>
  );
}

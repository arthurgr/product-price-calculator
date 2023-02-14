import React from "react";

export default function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-2 text-slate-20 border border-gray-300">
      {children}
    </th>
  );
}

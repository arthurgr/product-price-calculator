import React from "react";

export default function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-1 border border-gray-300">{children}</td>;
}

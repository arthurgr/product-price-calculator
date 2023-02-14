import React from "react";

export default function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-2 border border-gray-300">{children}</td>;
}

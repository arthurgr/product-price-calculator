import React from "react";

export default function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-6 py-2">{children}</td>;
}

import React from "react";

export default function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-6 py-3 font-semibold">{children}</th>;
}

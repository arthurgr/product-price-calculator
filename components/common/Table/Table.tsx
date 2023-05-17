import React from "react";

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-sm sm:rounded-lg overflow-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {children}
      </table>
    </div>
  );
}

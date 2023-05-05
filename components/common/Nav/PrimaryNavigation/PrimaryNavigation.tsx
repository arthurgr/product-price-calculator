import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { BUTTON } from "@/localization/Buttons";

export default function PrimaryNavigation() {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const signOut = () => {
    supabase.auth.signOut();
  };
  return (
    <nav className="my-3 flex justify-end">
      <ul>
        <li>
          <button
            onClick={signOut}
            className="bg-blue-500 hover:bg-blue-700 text-xs text-white py-1 px-2 rounded"
          >
            {BUTTON.SIGN_OUT}
          </button>
        </li>
      </ul>
    </nav>
  );
}

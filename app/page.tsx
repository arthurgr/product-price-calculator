import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import IngredientList from "components/IngredientList/IngredientList";
import { headers, cookies } from "next/headers";

export default async function Ingredients() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createServerComponentSupabaseClient({ headers, cookies });

  const { data: ingredients } = await supabase.from("ingredients").select();

  return (
    <>
      <IngredientList />
      <pre>{JSON.stringify(ingredients, null, 2)}</pre>
    </>
  );
}

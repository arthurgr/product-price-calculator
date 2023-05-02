import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import IngredientList from "components/IngredientList/IngredientList";
import { headers, cookies } from "next/headers";

export default async function Ingredients() {
  const supabase = createServerComponentSupabaseClient({ headers, cookies });

  const { data: ingredients } = await supabase.from("ingredients").select();

  return (
    <>
      <IngredientList />
      <pre>{JSON.stringify(ingredients, null, 2)}</pre>
    </>
  );
}

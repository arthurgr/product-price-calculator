import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export default async function Ingredients() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createServerComponentSupabaseClient({ headers, cookies });

  const { data: ingredients } = await supabase.from("ingredients").select();

  return <pre>{JSON.stringify(ingredients, null, 2)}</pre>;
}

import { supabase } from "@/utilities/supabase";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import IngredientList from "../components/IngredientList/IngredientList";
import RecipeList from "components/RecipeList/RecipeList";
import { GENERAL } from "@/localization/Consts";
import { Ingredient } from "components/IngredientList/interfaces/Ingredient";

function Home({ data }: { data: Array<Ingredient> }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{GENERAL.PRODUCT_PRICE_CALCULATOR}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mb-6 text-lg">{GENERAL.PRODUCT_PRICE_CALCULATOR}</h1>
        <section>
          <IngredientList />
          <RecipeList />
        </section>
      </main>
      <ul>
        {data.map((element) => (
          <li key={element.id}>{element.ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("ingredients").select();
  return {
    props: {
      data,
    },
  };
}

export default Home;

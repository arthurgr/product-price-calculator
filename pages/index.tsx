import Head from "next/head";
import styles from "../styles/Home.module.css";
import IngredientList from "../components/IngredientList/IngredientList";
import RecipeList from "components/RecipeList/RecipeList";
import { GENERAL } from "@/localization/Consts";

export default function Home() {
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
    </div>
  );
}

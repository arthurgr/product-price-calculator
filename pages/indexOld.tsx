import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GENERAL } from "@/localization/Consts";
import { Ingredient } from "components/IngredientList/interfaces/Ingredient";

function Home({ ingredients }: { ingredients: Array<Ingredient> }) {
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
          <pre>{JSON.stringify(ingredients, null, 2)}</pre>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      ingredients: [],
    },
  };
}

export default Home;

import Link from "next/link";
import classes from "./page.module.css"
import { getMeals } from "@/lib/meals";
import MealsGrid from "../components/meals/meals-grid";
import { Suspense } from "react";

async function MealsLoader(){
  const meals = await getMeals();   
  return <MealsGrid meals={meals} />
}

async function Meals(){

    return (
        <>
            <header className={classes.header}>
              <h1>
                Delicious meals, created{' '}
                <span className={classes.highlight}>by you</span>
              </h1>
              <p>Choose your fav recipe and cook it yourself. Its simple and tasty</p>
              <p className={classes.cta}>
                <Link href="/meals/share">
                  Share your Favourite Recipe
                </Link>
              </p>
            </header>

            <main className={classes.main}>
              <Suspense fallback={<p className={classes.loading}>Loading page....</p>}>
                <MealsLoader/>
              </Suspense>
            </main>
        </>
    )
}


export default Meals;
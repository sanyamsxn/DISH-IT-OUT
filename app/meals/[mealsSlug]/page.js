
import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation';


export default function MealDetailsPage({params}){

    const meal = getMeal(params.mealsSlug);

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    if(!meal){
        notFound();
    }

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill alt={meal.title}/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mail to =`}> {meal.creator} </a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>


            <main className={classes.bg}>
                    <p className = {classes.instructions}
                    dangerouslySetInnerHTML={{__html:meal.instructions}}
                    >
                </p>
            </main>
        </>
    )
}
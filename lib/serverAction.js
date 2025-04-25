'use server'


import { redirect } from 'next/navigation';
import { saveMeal } from "./meals"

function isInvalid(text){
    return !text || text.trim()==='';
}

export default async function ShareMeal(prevState, formData ){

    const meal = {
        title: formData.get('title'),
        creator : formData.get('name'),
        creator_email : formData.get('email'),
        image : formData.get('image'),
        summary: formData.get('summary'),
        instructions : formData.get('instructions'),
    }

    if(
        isInvalid(meal.title) || isInvalid(meal.summary) || isInvalid(meal.instructions) ||
        isInvalid(meal.creator) || isInvalid(meal.creator_email) || !(meal.creator_email.includes('@'))
    ){
        return {
            message : "Input is wrong"
        }
    }

    await saveMeal(meal);
    redirect('/meals');



}
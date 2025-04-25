'use client'

import { useFormStatus } from "react-dom"

export default function MealShareButton(){
    const {pending} = useFormStatus();
    return <button disabled={pending}>
        {pending ? 'Submitting' : 'Share Meal'}
    </button>
}
'use client'

import classes from './error.module.css'
export default function Error(){
    return (<main>
        <p className={classes.error}>Failed to fetch Data from the database!!!!</p>
    </main>)
}
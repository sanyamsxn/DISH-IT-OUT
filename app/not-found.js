import classes from './not-found.module.css'

export default function NotFound(){
    return(
        <>
            <p className={classes.notFound}><span className={classes.code}> 404</span> &nbsp;Page not found!!!</p>
            <p className={classes.err}>Unfortunately, we could not find the requested page or resources</p>
        </>
    )
}
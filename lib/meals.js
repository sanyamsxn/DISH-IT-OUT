import sql from 'better-sqlite3';
const dbConnect = sql('meals.db');
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';
export async function getMeals(){
    await new Promise(resolve=>setTimeout(resolve,5000));
    // throw new Error('failed to fetch');
    return dbConnect.prepare('SELECT * FROM meals').all();
}


export function getMeal(slug){
    return dbConnect.prepare('SELECT *FROM meals WHERE slug= ?').get(slug);
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower:true}); // to convert all characters to lower.
    meal.instructions = xss(meal.instructions);
    //this will clean and sanitize the instructions.

    //image extension:
    const extension =meal.image.name.split('.').pop(); //extracting last element.
    const fileName = `${meal.slug}.${extension}`;
    // use fs provided by the nextjs
    // this creates a stream that allows us to write data into a file
    const stream =fs.createWriteStream(`public/images/${fileName}`);       
    //this returns a stream which is used to write in the provided path

    //write into the file using the steam but we have to buffer 
    const bufferedImage = await meal.image.arrayBuffer(); // this array buffer returns a promise use await

    //now write in the path: it takes 2 arguments: 1st what you want to write
    // 2nd the function will be executed once the writing is done.
    stream.write(Buffer.from(bufferedImage), (error)=>{
        if(error)   
            throw new Error("failed to upload");
    });

    // here means the image is written in the path: now we will update the meal.image cause we get a object at first
    // we will update it with file name cause file names or urls are saved.
    meal.image = `/images/${fileName}`; 
    // we are not including the public folder so when we make requests we won't be sending to /public/images

    //saving image
    dbConnect.prepare(`
        INSERT INTO meals(title, summary, instructions, creator, creator_email, image, slug)
        VALUES(@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `).run(meal);
    //either we could have use ? and then enter the values in run( here) but it could have been open to sql injection attacks
    // so now we use @ syntax and passing meal then it will extract on its own.
}
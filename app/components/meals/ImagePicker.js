'use client'
import { useRef, useState } from "react";
import classes from './ImagePicker.module.css';
import Image from 'next/image'

export default function ImagePicker({label, name}){

    //state to maintain which image is chosen.
    // to preview the image we use data url of the selected image and then use it to the src of Image
    const imageInput = useRef();
    const [currentImage, setCurrentImage] = useState();

    function ImageHandle(event){
        const file = event.target.files[0];
        if(!file){
            setCurrentImage(null);
            return;
        }
        const fileReader = new FileReader();

        fileReader.onload =()=>{
            setCurrentImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    function handleButtonClick(){
        imageInput.current.click();
    }

    console.log(currentImage);
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
            <div className={classes.preview}>
                {!currentImage && <p>No image picked yet</p>}

                {currentImage && 
                    <Image src={currentImage} fill alt="image"/>}

            </div>
            <input 
                onChange={ImageHandle}
                className={classes.input}
                type="file" 
                required 
                id={name}
                name={name}
                accept="image/png, image/jpeg"
                ref={imageInput}
                >
            </input>

            <button className={classes.button} type="button" onClick={handleButtonClick}>Pick an image</button>

            </div>
        </div>
    )
}
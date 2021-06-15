import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image, link}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
            <p className= {style.links}>{link}</p>
        </div>
    );
};

export default Recipe;
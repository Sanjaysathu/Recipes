import React from 'react';

const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className="recipe" style={{width:'40vw',margin:'20px 0px',background:'white',borderRadius:'20px'}}>
            <h1 style={{textAlign:'center'}} >{title}</h1>
            <p style={{textAlign:'center'}}>Calories : {Math.floor(calories)}</p>
            <ol>
                {ingredients.map(ingredient =>
                (
                    <li>{ingredient}</li>
                ))}
            </ol>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img src={image} style={{width:'200px',height:'200px'}} alt=""/>
            </div>
        </div>
    )
}

export default Recipe;
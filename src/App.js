import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = '8f8dfe66';
  const APP_KEY = '2e8f2bd6ad44c2e51ba4c0a689db255c';

  const [search,setsearch] = useState('');
  const [query,setQuery] = useState('chicken');
  const [recipes,setRecipes] = useState([]);

  const onchange = (e) =>{
    setsearch(e.target.value);
  }

  const onsubmit = () =>{
    setQuery(search);
  }

  useEffect(() => {getrecipe();},[query])

  const getrecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits); 
  }
 

  return(
    <div>
      <nav className="navbar">
        <input type="text" onChange={onchange} value={search} style={{padding:'5px 10px'}} />
        <button onClick={onsubmit} style={{padding:'5px 10px',cursor:'pointer'}} >Search</button>
      </nav>
      <div className="recipes">
       {recipes.map(recipe => (
        <Recipe
           title={recipe.recipe.label}
           calories={recipe.recipe.calories}
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredientLines}
        />
        ))}  
      </div>
      
    </div>
  );
}

export default App;

import React from "react"

//create each individual item
//needs: name, cuisine, photo, ingredients, preperation, onDelete 


function RecipeItem({recipe, deleteRecipe, index}){

//layout of individual reciepe components 
return(
    <tr>
        <td className="content_td">{recipe.name}</td>
        <td className="content_td">{recipe.cuisine}</td>
        <td className="content_td"><img src={recipe.photo} /></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td><button name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
    </tr>
    )
}

export default RecipeItem;
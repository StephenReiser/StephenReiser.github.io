//////////////////Global variables
let ingredients = 'chicken Onion'  //this is a default - need to make it take the input from the submit button.  Probably also need a way to put everything to lower case, remove spaces (apprently it doesn't matter to remove spaces/lowercase) and maybe remove special characters.  I dont even need to add commas 


////////include button currently is assigning the input from the text box to the ingredients variable which gets assinged to the findrecipe function - so we can update what we searched for

const includeButton = (event) => {
    let addIngredients = $(`#input-box`).val()
    ingredients = addIngredients
    event.preventDefault()
    // $(event.currentTarget).trigger('reset') //removed this - I think it is useful for the user to be able to see what they searched for
    console.log(ingredients)
    findRecipes()
}


/////////Next - need to include a function that creates divs with all of the elements I want to include.//////This function may want to contain other functions - not sure if that'll make it more confusing.


//////////// this is the ajax function linked to edamam////////////////
const findRecipes = () => {
    
    $.ajax({
    url: `https://api.edamam.com/search`,
    type: "GET",
    data: {
        q: ingredients,
        app_id: '9d94e852',
        app_key: '480a66a770af9cbc380a775b8959453c'
    }
}).then((data) => {
 console.log(data) //to get to recipes its data.hits[i]


  
  
  
}, (error) => {
    console.log(error)
});
}
///////////end ajax function////////////////////////////////


$(() => {
$(`.includeIngredients`).on(`submit`, includeButton)
// findRecipes()

})
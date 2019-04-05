//////////////////Global variables
let ingredients = ''  //this is a default - need to make it take the input from the submit button.  Probably also need a way to put everything to lower case, remove spaces (apprently it doesn't matter to remove spaces/lowercase) and maybe remove special characters.  I dont even need to add commas 




/////////////////////////////////////////
/////////////////////////////////////////
//would it make sense to allow user to select number of recipes shown
/////////////////////////////////////////
/////////////////////////////////////////

////////include button currently is assigning the input from the text box to the ingredients variable which gets assinged to the findrecipe function - so we can update what we searched for

const includeButton = (event) => {
    let addIngredients = $(`#input-box`).val()
    ingredients = addIngredients
    event.preventDefault()
    // $(event.currentTarget).trigger('reset') //removed this - I think it is useful for the user to be able to see what they searched for
    console.log(ingredients)
    
    /////////////////////////////////////////
    findRecipes()   //<<<<<<<<<<<<Commented this out for now just so I'm not constantly calling the ajax
    /////////////////////////////////////////
}


/////////Next - need to include a function that creates divs with all of the elements I want to include.//////This function may want to contain other functions - not sure if that'll make it more confusing.

//Need to loop through the object by going to data.hits[i]
//from here, the name is at data.hits[i].label
//calories, cautions dietLabels are all available.
//url is available at data.hits[i].url
//image is available at data.hits[i].image
//ingredientLines is an array that includes all of the ingredients - will need to loop through this and create a UL/LI
 
const headerAndImage = (data, i) => {
    //////////////this section is creating the header and image
     let recipeName = data.hits[i].recipe.label
     let recipeURL = data.hits[i].recipe.url
     let recipeImageURL = data.hits[i].recipe.image
     const $recipeImage = $(`<img>`).attr(`src`, recipeImageURL).attr(`alt`, recipeName)
     let $header = $(`<h3>`)
     const $aTag = $(`<a>`).attr(`href`, recipeURL).text(recipeName)
     $header.append($aTag)
     let $mainDiv = $(`<div>`).addClass(`singleRecipe`)
     let $newImageDiv = $(`<div>`).addClass(`recipePic`).on(`click`, picHoverFunc).append($recipeImage).append($header)
     let $newTextDiv = $(`<div>`).addClass(`recipeInfo`).on(`click`,infoHoverFunc)

    /////////////////need to do some loop in here to add in the UL/LI

    let $newUL = $(`<ul>`).text(`Ingredients:`)

    for (let ingIndex = 0; ingIndex < data.hits[i].recipe.ingredientLines.length; ingIndex ++) {
        let recipeIngredient = data.hits[i].recipe.ingredientLines[ingIndex]

        let newIngrLi = $(`<li>`).text(recipeIngredient)
        $newUL.append(newIngrLi)


        // console.log(data.hits[i].recipe.ingredientLines[ingIndex])


    }
    $newTextDiv.append($newUL)
     $mainDiv.append($newImageDiv).append($newTextDiv)
     $('.recipeBox').append($mainDiv)
     ///////////////this section ends creating the header
     
    }


/////////////for the image I want them liek this:
//<a href="default.asp">
//  <img src="smiley.gif" alt="HTML tutorial"
//  </a>

//for now i'll use an h2 or something that is a link


///////////////////////////////////////////////////////
/////       I want to include a way to toggle the divs on /////       hover.  shoudl be able to do toggle and on    /////            hover
////
////
///
/////////////////////////////////////////////////////////

const picHoverFunc = (event) => {
    $(event.currentTarget).parent().children().eq(1).toggle()
    $(event.currentTarget).toggle()
}

const infoHoverFunc = (event) => {
    console.log($(event.currentTarget))
    $(event.currentTarget).parent().children().eq(0).toggle()
    $(event.currentTarget).toggle()
}



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
 console.log(data.hits[0]) //to get to recipes its data.hits[i]

 for (let i = 0; i < data.hits.length; i++) {
  headerAndImage(data,i)  
 }

 


  
  
  
}, (error) => {
    console.log(error)
});
}
///////////end ajax function////////////////////////////////





$(() => {
    





$(`.includeIngredients`).on(`submit`, includeButton)

// findRecipes()

})
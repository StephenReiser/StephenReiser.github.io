//////////trying to get local storage
favoritesArray = []



let data = JSON.parse(localStorage.getItem(`items`))

//////////////////////








//////////////////Global variables
let ingredients = ''  //this is a default - need to make it take the input from the submit button.  apprently it doesn't matter to remove spaces/lowercase or special characters.  I dont even need to add commas 

let recipeStartCount = 99
let recipeEndCount = 99

////These are the number of recipes to load on click.  the includeButton function is setting these to 0 and 20.  The load more button is incrementing each by 20 - so on load 20 are loaded and then each time user clicks load more, 20 more are loaded.

let excludeIngredients = ''
let dietRestrictions = ''
let healthRestrictions = ''

///////these are addtional variables to be included in the search - diet restrictions shoudl be a drop down


////////include button currently is assigning the input from the text box to the ingredients variable which gets assinged to the findrecipe function - so we can update what we searched for

const includeButton = (event) => {
    let addIngredients = $(`#input-box`).val()
    ingredients = addIngredients
    recipeStartCount = 0
    recipeEndCount = 20
    $(`.recipeBox`).empty()
    event.preventDefault()
    // $(event.currentTarget).trigger('reset') //removed this - I think it is useful for the user to be able to see what they searched for
    // console.log(ingredients)
    excludeIngredients = $(`#exclude-box`).val()
    dietRestrictions = $(`#dietRestrictions`).val()
    healthRestrictions = $(`#healthRestrictions`).val()
    // console.log(excludeStuff)
    // console.log(dietStuff)
    
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
     const $aTag = $(`<a>`).attr(`href`, recipeURL).attr(`target`, `_blank`).text(recipeName)
     $header.append($aTag)
     let $mainDiv = $(`<div>`).addClass(`singleRecipe`)
     let $newImageDiv = $(`<div>`).addClass(`recipePic`).on(`mouseenter`, picHoverFunc).append($recipeImage).append($header)
     let $newTextDiv = $(`<div>`).addClass(`recipeInfo`).on(`mouseleave`,infoHoverFunc)


     /////this shoudl add a header to the List:
     let $infoHeader = $(`<h3>`)
     let $infoDiv = $(`<div>`)
     const $infoATag = $(`<a>`).attr(`href`, recipeURL).attr(`target`, `_blank`).text(recipeName)
     $infoHeader.append($infoATag)
     $infoDiv.append($infoHeader)

    /////////////////this adds in the UL

    let $newUL = $(`<ul>`).text(`Ingredients:`)

    for (let ingIndex = 0; ingIndex < data.hits[i].recipe.ingredientLines.length; ingIndex ++) {
        let recipeIngredient = data.hits[i].recipe.ingredientLines[ingIndex]

        let newIngrLi = $(`<li>`).text(recipeIngredient)
        $newUL.append(newIngrLi)


        // console.log(data.hits[i].recipe.ingredientLines[ingIndex])


    }

//////////////////////////////////////////////////////////
////////////This section adds in the more info button to get diet restrictions


let $dietButton = $(`<button>`).attr(`class`, `dietButton`).text(`Get More Info!`).on(`click`, dietButtonModal)
let $dietDiv = $(`<div>`).addClass(`dietDiv`)


//////////////////////This entire section sets the diet and cautions for each recipe and adds it to the modal
let $cautionString = data.hits[i].recipe.cautions.join(',')
let $dietString = data.hits[i].recipe.dietLabels.join(',')


if (data.hits[i].recipe.cautions.length > 0) {
    $cautionString = `Cautions: ${$cautionString}`
} else {$cautionString = ''}
if (data.hits[i].recipe.dietLabels.length > 0) {
    $dietString = `Diet Labels: ${$dietString}`
}

let $dietDivContent = $(`<div>`).addClass(`dietDivContent`).html(`
<p>
${$cautionString} <br>
${$dietString}
</p>
`)
////^^^^^^^^^^^This entire section sets the diet and cautions for each recipe and adds it to the modal//////

let $dietCloseButton = $(`<button>`).attr(`class`, `dietCloseButton`).text(`Back to Ingredients`).on(`click`, dietCloseModal)

$dietDiv.append($dietDivContent).append($dietCloseButton)

/////////////////////////////////////////////////////////
//////////Adding in a second button here to favorite


let $newIcon = $(`<span>`).attr(`class`, `far fa-thumbs-up`).on(`click`, favoriteButton)


$newTextDiv.append($newIcon)

//////////////////////////////////////////////////////////
    

    $newTextDiv.append($dietButton).append($dietDiv)
    $newTextDiv.append($newUL)
    $newTextDiv.append($infoDiv)
     $mainDiv.append($newImageDiv).append($newTextDiv)
     $('.recipeBox').append($mainDiv)
     ///////////////this section ends creating the header
     
    }


//////////////////////These two functions 'flip' the pictures to display a recipe'.  /////////////////////////////////////////////////////////////////////////////

const picHoverFunc = (event) => {

///////this if else func is trying to set the height of both sides of the recipes ////////////////////////////////////////////////////////////////////////////////////////////////////////////
let frontHeight = $(event.currentTarget).parent().height();
let backHeight = $(event.currentTarget).parent().children().eq(1).height();

if (frontHeight > backHeight) {
    $(event.currentTarget).parent().children().eq(1).height(frontHeight);
}
else if (frontHeight < backHeight) {
    $(event.currentTarget).parent().children().eq(1).height(frontHeight);
}
else {
    $(event.currentTarget).parent().children().eq(1).height(frontHeight);
}

///////////////////////////////////////////
// This section is trying to fix the width
///////////////////////////////////////////
let frontWidth = $(event.currentTarget).parent().outerWidth();
let backWidth = $(event.currentTarget).parent().children().eq(1).outerWidth();

if (frontWidth > backWidth) {
    $(event.currentTarget).parent().children().eq(1).width(frontWidth);
}
else if (frontWidth < backWidth) {
    $(event.currentTarget).parent().children().eq(1).width(frontWidth);
}
else {
    $(event.currentTarget).parent().children().eq(1).width(frontWidth);
}



///^^this if else is trying to set the height of both sides of the recipes

/////now that hieght/width is set, toggles dispaly on btoh sides of the card
    $(event.currentTarget).parent().children().eq(1).toggle()
    $(event.currentTarget).toggle()
}

const infoHoverFunc = (event) => {
    // console.log($(event.currentTarget))
    ///////since this stuff is on the back, don't need to reset any heigh/width
// let frontHeight = $('.recipePic').outerHeight();
// let backHeight = $('.recipeInfo').outerHeight();

// if (frontHeight > backHeight) {
//     $('recipeInfo').height(frontHeight);
// }
// else if (frontHeight > backHeight) {
//     $('.recipeInfo').height(backHeight);
// }
// else {
//     $('.recipeInfo').height(frontHeight);
// }

///this if else is trying to set the height of both sides of the recipes - not needed as height is set on the first hover - just need to toggle
    $(event.currentTarget).parent().children().eq(0).toggle()
    $(event.currentTarget).toggle()
}

///////////////////////////////////////////////////////

//////////// this is the ajax function linked to edamam//////////////// ends up beeing SUPER LONG to include the big if/else statement around the diet restrictions/health restrictions being blank. 
const findRecipes = () => {

if (dietRestrictions === '' && healthRestrictions === '') {
    $.ajax({
    url: `https://api.edamam.com/search`,
    type: "GET",
    data: {
        q: ingredients,
        app_id: '9d94e852',
        app_key: '480a66a770af9cbc380a775b8959453c',
        from: recipeStartCount,
        to: recipeEndCount,
        excluded: excludeIngredients,
        // diet: dietRestrictions,
        // health: healthRestrictions,

        //These work IF they are filled in - if not they return an error - probably need to make a little if/else statement


    }
}).then((data) => {
//  console.log(data.hits[0]) //to get to recipes its data.hits[i]
 if (data.hits[0] === undefined) {

    badSpelling()
 }
 for (let i = 0; i < data.hits.length; i++) {
  headerAndImage(data,i)  
 }

}, (error) => {
    console.log(error)
});
} else if (dietRestrictions === '' && healthRestrictions !== '') {
    $.ajax({
    url: `https://api.edamam.com/search`,
    type: "GET",
    data: {
        q: ingredients,
        app_id: '9d94e852',
        app_key: '480a66a770af9cbc380a775b8959453c',
        from: recipeStartCount,
        to: recipeEndCount,
        excluded: excludeIngredients,
        // diet: dietRestrictions,
        health: healthRestrictions,

        //These work IF they are filled in - if not they return an error - probably need to make a little if/else statement


    }
}).then((data) => {
//  console.log(data.hits[0]) //to get to recipes its data.hits[i]
 if (data.hits[0] === undefined) {

    badSpelling()
 }
 for (let i = 0; i < data.hits.length; i++) {
  headerAndImage(data,i)  
 }

}, (error) => {
    console.log(error)
});
} else if (dietRestrictions !== '' && healthRestrictions === '') {
    $.ajax({
    url: `https://api.edamam.com/search`,
    type: "GET",
    data: {
        q: ingredients,
        app_id: '9d94e852',
        app_key: '480a66a770af9cbc380a775b8959453c',
        from: recipeStartCount,
        to: recipeEndCount,
        excluded: excludeIngredients,
        diet: dietRestrictions,
        // health: healthRestrictions,

        //These work IF they are filled in - if not they return an error - probably need to make a little if/else statement


    }
}).then((data) => {
//  console.log(data.hits[0]) //to get to recipes its data.hits[i]
 if (data.hits[0] === undefined) {

    badSpelling()
 }
 for (let i = 0; i < data.hits.length; i++) {
  headerAndImage(data,i)  
 }

}, (error) => {
    console.log(error)
});
} else {
    $.ajax({
    url: `https://api.edamam.com/search`,
    type: "GET",
    data: {
        q: ingredients,
        app_id: '9d94e852',
        app_key: '480a66a770af9cbc380a775b8959453c',
        from: recipeStartCount,
        to: recipeEndCount,
        excluded: excludeIngredients,
        diet: dietRestrictions,
        health: healthRestrictions,

        //These work IF they are filled in - if not they return an error - probably need to make a little if/else statement


    }
}).then((data) => {
//  console.log(data.hits[0]) //to get to recipes its data.hits[i]
 if (data.hits[0] === undefined) {

    badSpelling()
 }
 for (let i = 0; i < data.hits.length; i++) {
  headerAndImage(data,i)  
 }

}, (error) => {
    console.log(error)
});
}
}
///////////end ajax function////////////////////////////////
///////////end ajax function////////////////////////////////
///////////end ajax function////////////////////////////////
///////////end ajax function////////////////////////////////

const loadMore = (event) => {
    recipeStartCount += 20
    recipeEndCount += 20
    event.preventDefault()
    findRecipes()
}

///////////This section is loading more events - it is setting recipe start and end counts and then running findRecipes////////////////////////////////

////////////////////////////////////////////////////////
///This section is for the Modal to get the data input and then run the ajax function


const modalButton = (event) => {
    let $modal = $(`#myModal`)
    $modal.css(`display`, `none`)
    event.preventDefault()
    
    excludeIngredients = $(`#modal-exclude`).val()
    dietRestrictions = $(`#modalDietRestrictions`).val()
    healthRestrictions = $(`#modalHealthRestrictions`).val()
    ingredients = $(`#modal-input`).val()
    recipeStartCount = 0
    recipeEndCount = 20
//////////////////////
    findRecipes() //commment this out to make this not run on click
}





//////////////////////////////////////////////////////////Diet Info Modal Button on click functions

const dietButtonModal = (event) => {
    let hiddenDiv = $(event.currentTarget).parent().children().eq(2)
    // console.log(hiddenDiv)
    hiddenDiv.toggle()
}

const dietCloseModal = (event) => {
    let hiddenDiv = $(event.currentTarget).parent()
    // console.log(hiddenDiv)
    hiddenDiv.toggle()
}


const favoriteButton = (event) => {

    $(event.currentTarget).css(`border`, `1px solid black`).css(`background`, `lightgreen`)
    let newbutton = $(event.currentTarget).parent().parent().html()
    let $copyDiv = $(`<div>`).addClass(`singleRecipe`)
    $copyDiv.append(newbutton)
    let masterDiv = $(`<div>`).append($copyDiv)

    

    let $copyHtml = masterDiv.html()

///////this all seems like a fix to get all pieces of the div added - slight weirdness but mostly seems ok








    //  console.log(newbutton)
    favoritesArray.push($copyHtml)
    localStorage.setItem(`items`, JSON.stringify(favoritesArray))
    // alert(`clicked`)

    //////this seems to work to add stuff to local storage, then it will append it to the other file when we refresh

}



/////////////////////////////////////////////////////////////////////////////////////////This function is to make the modal pop back up when some one puts in a bad string in the search bar/////////////////////////////////////////////////////

const badSpelling = () => {
    alert(`Could not find anything, please check your spelling and search again`)
        $(`#myModal`).toggle()
}











$(() => { /////start doc on ready func
    
/////////////////////These functions are to make the on hover work on the dummy divs
////////////////////////////////////////////////////////
// $(`.recipeInfo`).on(`hover`,infoHoverFunc)
// $(`.recipePic`).on(`hover`, picHoverFunc)
//////////////////////////////////////////////////////////
///////////////////////////////////////////




//////////////////////////////////////////////////////////
///////////////////////////////////////////


$(`.includeIngredients`).on(`submit`, includeButton)
$(`.modalIncludeIngredients`).on(`submit`, modalButton)
$(`.moreRecipesButton`).on(`click`,loadMore)



})  //////end doc on ready func







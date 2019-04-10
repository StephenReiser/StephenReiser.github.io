
let storageData = JSON.parse(localStorage.getItem(`items`))



const favoriteHover = () => {
    $(event.currentTarget).parent().children().eq(0).css(`display`, `block`)
    $(event.currentTarget).css(`display`, `none`)
    
    
}


const picFavoriteHover = () => {
    $(event.currentTarget).parent().children().eq(1).toggle()
    $(event.currentTarget).toggle()
   
    
}

const favoritePics = () => {
    $(`.recipeInfo`).toggle()
    $(`.recipePic`).toggle()
}

const removeFavorite = (event) => {
    let $divToRemove = $(event.currentTarget).parent().parent()
    // console.log(storageData)
    $divToRemove.remove()
    let $recipeBoxArray = $(`.recipeBox`)
    console.log($recipeBoxArray.children().length)
    console.log($recipeBoxArray.children()[0])
    favoritesArray = []

    if ($recipeBoxArray.children().length === 0) {
        favoritesArray = []
        localStorage.setItem(`items`, JSON.stringify(favoritesArray))

    } else{
        for (let i = 0; i < $recipeBoxArray.children().length;i++) {
            let newDiv = $recipeBoxArray.children().eq(i)
            let newHtml = newDiv.html()
            let $copyDiv = $(`<div>`).addClass(`singleRecipe`)
            $copyDiv.append(newHtml)
            let masterDiv = $(`<div>`).append($copyDiv)

    

    let $copyHtml = masterDiv.html()
    favoritesArray.push($copyHtml)
    localStorage.setItem(`items`, JSON.stringify(favoritesArray))
    // console.log($recipeBoxArray.children().length)
    // console.log($recipeBoxArray.children().eq(0).html())
    }








    // storageData = []
    // console.log(storageData)
    // localStorage.setItem(`items`, JSON.stringify(storageData))
    // testingnewArray()
}
}

///////////////This removes it from the page but not from local storage

const testingnewArray = () => {
   for (let i = 0; i < storageData.length; i++) {
    $(`.recipeBox`).append(storageData[i])
    $(`span`).remove()
    $(`button`).text(`Remove from Favorites`).addClass(`favoriteRemoveButton`).on(`click`, removeFavorite)
    
    
    
   }

    //this seems to work
}

//////Can I make it so the pictures are displayed?

////////////In here probably could write some code to make the stuff on hover to work.  buttons also don't quite seem to work


$(() => {

console.log(storageData[0])
testingnewArray()
$(`.recipePic`).on(`mouseenter`,picFavoriteHover)
$(`.recipeInfo`).on(`mouseleave`, favoriteHover)
// favoritePics()




})

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

const testingnewArray = () => {
   for (let i = 0; i < storageData.length; i++) {
    $(`.recipeBox`).append(storageData[i])
    
    
    
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
favoritePics()


})
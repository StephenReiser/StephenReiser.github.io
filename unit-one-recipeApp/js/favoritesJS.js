
let storageData = JSON.parse(localStorage.getItem(`items`))
const testingnewArray = () => {
   for (let i = 0; i < storageData.length; i++) {
    $(`.recipeBox`).append(storageData[i])
   }

    //this seems to work
}


////////////In here probably could write some code to make the stuff on hover to work.  buttons also don't quite seem to work


$(() => {

console.log(storageData[0])
testingnewArray()

})
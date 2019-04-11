Recipe App
----------

### About this App

Recipe App allos users to serach a database of recipes by inputting ingredients they have on hand.  Users can refine their search by entering additional criteria, including health and diet restrictions, or by excluding specific ingredients.


### Instructions
Using this app is simple.  First input any ingredients you would like to cook with (no need to worry about commas or other punctuation).  Click Get Recipes! for a curated selection of recipes that include your ingredients.

![alt text](https://github.com/StephenReiser/StephenReiser.github.io/blob/master/unit-one-recipeApp/images/Instruction%20images/Search%20Ingredients.png "Search for Ingredients")

If you would ike to be more specific, you can restrict your search by using the Exclude Ingredients search or Diet Restrictions and Health Restricitons drop down.

To see a list of ingredients included in any given recipe, hover over the accompanying photo.  If you really like a recipe, click the thumbs up icon to save it to you Favorittes.  you can also click the Get More Info button to view diet and health restrictions.

![alt text](https://github.com/StephenReiser/StephenReiser.github.io/blob/master/unit-one-recipeApp/images/Instruction%20images/Hover%20and%20Favorite.png "Favorites and Diets")

At any time, you can click on the grey recipe title, which will redirect you to the original recipe site.

For more recipes, scroll to the bototm and click Load More Recipes

![alt text](https://github.com/StephenReiser/StephenReiser.github.io/blob/master/unit-one-recipeApp/images/Instruction%20images/Load%20More.png "Load More")

To view your Favorites, use the Nav Bar at the top

![alt text](https://github.com/StephenReiser/StephenReiser.github.io/blob/master/unit-one-recipeApp/images/Instruction%20images/Nav%20Bar.png "Nav Bar")

The Favorites page stores recipes you gave a thumbs up to.  Hover over a recipe and click Remove from Favorites if you no longer want a recipe on your Favorites page.

![alt text](https://github.com/StephenReiser/StephenReiser.github.io/blob/master/unit-one-recipeApp/images/Instruction%20images/Remove%20Button.png "Remove from Favorites")



### Other Notes

This app is built using jQuery, CSS, and some HTML.  The majority of the functionality and content is created through jQuery.  Each recipe essentially has 3 cards - A picture, a list of ingredients, and a list of diet/health restrictions.

The main modal appears on load or if a search is invalid. The idea of the modal is to force the user to make an action.  Currently, this app loads 20 recipes at a time, this can be toggled via the code.

Local storage is used to push favorites to the favorites page


#### Approach Taken

I wanted to make an app with very few distractions.  SInce it is easy to see a picture and tell if it looks appetizing, I knew I wanted to make the text only appear when a picture was clicked on.  This would remove distractions and make the site appear clean and simple.  By using event listeners, it was easy to control which sets of data were displayed.

By using flexbox I was able to make a clean dynamic grid which seemed to fit my goals.

I also knew I wanted to force the user to input data the second the site was loaded.  By using a modal, the user has to search for something which then forces them to realize how the site works.  Once the search functionality was built, the modal was the next step.

While not initially planned, a feature that made a lot of sense to implement this so it had real world functionality was to add a favorites button.  This allows the user to store favorites for later.

I considered adding in calorie information or nutrition information.  I just felt that the information available would have given an incorrect and incomplete story.  For example, while total calories were listed, number of servings were not.  The nutrition information (grams of fat, Vitamin C % etc) was mostly available, but I thought adding it would make each card a bit too busy.  I also considered adding in a second API to try to pair stuff with wine, but I thought this could make everything appear to cluttered or forced.

Two features that I would have liked to add would be to keep the current search available if a user were to click on favorites and then click back to the search page.  For now, I put in a mini fix so that the links open up a new tab.  The second feature I would have liked to add would be if a user favorites a recipe, the thumbs up would stay green even if they refreshed the browser.  I think I could do this via local storage.  I'm not sure if the API gives each recipe a unique ID. 

#### Link to site

[Link to Recipe App](https://stephenreiser.github.io/unit-one-recipeApp/index.html "Recipe App")
### Built With
All recipes are generated from the Edamam API.  There is a cap of 5 searchs/minute in the free version.
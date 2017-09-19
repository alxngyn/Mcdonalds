# McDonalds Calorie Optimizer

### Why
I was inspired by the Taco Bell hack at TechCrunch NY 2014. I was sad to see that it was no longer available. I sought out to do the same but in webapp form and for McDonalds.

### Tech used
I tried to keep it simple
- html, css, javascript
- jquery
- bootstrap for ui
- no backend services

### Installation & Setup
1. go into `data/` and run `python3 convert_data.py`. This will create a `nutritional_data.json`
2. Copy the contents of `nutritional_data.json` and store it into a variable in `js/data.js` this is because javascript does not have an elegant way of opening files
3. open `index.html`


# references:

For nutritional data
- https://fastfoodnutrition.org/mcdonalds/chart

For pricing data
- https://www.fastfoodmenuprices.com/mcdonalds-prices/

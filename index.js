var recipes = {
  ingredient: "quantity"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipesUpdated = Object.assign({}, [key], value)
  return recipesUpdated + recipes
}
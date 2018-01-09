var recipes = {
  ingredient: "quantity"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = Object.assign({}, [key], value)
  return recipes
}

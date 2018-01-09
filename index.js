var recipes = {
  ingredient: "quantity"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipesNew = Object.assign({}, key, value)
  recipesNew[key] = value
  return recipesNew
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = 'value'
  return recipes
}
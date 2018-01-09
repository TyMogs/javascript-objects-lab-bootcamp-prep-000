var recipes = {
  ingredient: "quantity"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipesNew = Object.assign({}, key, value)
  return recipesNew[key] = value
  return recipesNew 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = [value]
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var recipiesNew = Object.assign({}, [key])
  delete recipiesNew.key
  return recipesNew
}

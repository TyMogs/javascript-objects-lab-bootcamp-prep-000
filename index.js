var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, key, value)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value
  return object 
}

function deleteFromObjectByKey(object, key) {
  var recipiesNew = Object.assign({}, [key])
  delete recipiesNew.key
  return recipesNew
}

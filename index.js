var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipesNew = Object.assign({}, key, value)
  return object 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = [value]
  return object 
}

function deleteFromObjectByKey(object, key) {
  var recipiesNew = Object.assign({}, [key])
  delete recipiesNew.key
  return recipesNew
}

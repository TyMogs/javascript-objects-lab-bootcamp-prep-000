var recipes = {
  ingredient: "quantity"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = Object.assign({}, [key], value)
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = 'value'
  return recipes
  console.log(recipes)
}
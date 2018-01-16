const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens

  /*shift
  unshift
  push
  pop*/

}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newArr=[]
  newArr = kittens.push(name)
  return newArr
  
}

function prependKitten(name){
  var newArr=[]
  newArr = kittens.unshift(name)
  return newArr
  
}

function removeLastKitten(){
  var newArr=[]
  newArr = kittens.pop()
  return newArr
  
}

function removeFirstKitten(){
  var newArr=[]
  newArr = kittens.shift()
  return newArr
  
}

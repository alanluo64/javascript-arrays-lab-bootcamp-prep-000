const app = "I don't do much."
function destructivelyAppendKitten(Ralph){
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(Bob){
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(kittens)
  return kittens
}

function appendKitten()
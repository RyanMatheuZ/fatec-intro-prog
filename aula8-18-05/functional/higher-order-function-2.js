// curring

function finalPrice(tax) {
    return function (price) { 
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycfinalPrice(25.1))
console.log(nycfinalPrice(21.7))
console.log(nycfinalPrice(107.9))
const myArr = [1,2,3]

let initialVal = 6

// const total = myArr.reduce(function (arr, currVal) {
//      return arr + currVal
// }, initialVal)

const total = myArr.reduce ((arr, currVal) => arr + currVal , initialVal)

console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

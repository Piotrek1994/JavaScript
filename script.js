// /*
//     Metody do wykorzystania:
//     charAt()
//     includes()
//     replace()* podchwytliwe 🙂
//     slice()
//     split()
//     toLowerCase()
//     toUpperCase()
// */

// const text1 = 'powiększ mnie!'
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
// const text7 = 'podziel, ten, string, od, przecinków'

// const text1Upper = text1.toUpperCase()
// console.log(text1Upper);

// const text2Lower = text2.toLowerCase()
// console.log(text2Lower);

// const text3Cut = text3.slice(6,50)
// console.log(text3Cut);

// const text4Check = text4.includes("czy")
// console.log(text4Check);

// const text5LogL = text5.charAt(2)
// console.log(text5LogL);

// const text6Change = text6.replaceAll("pies", "kot")
// console.log(text6Change);

// const text7Split = text7.split(",")
// console.log(text7Split);

// x *= y
// x /= y
// x %= y

// const pass = '21ok2opk2opk212o'

// if (pass.length > 10 && pass.includes('!')) {
// 	console.log('Masz rewelacyjne haslo')
// } else if (pass.length > 10) {
// 	console.log('Masz super haslo')
// } else {
// 	console.log('Masz do dupy haslo')
// }

// const x = 50
// const y = 30

// if (x > y) {
//     console.log(`${x} > ${y}`);
// }

// const color = 'blue'
// const newColor = 'green'

// if (color == newColor) {
//     console.log('Kolory się zgadzają');
// } else {
//     console.log('Kolory się nie zgadzają');
// }

// const x = 100
// const y = 50

// if (x > y) {
// 	console.log(`${x} > ${y}`)
// } else if (x == y) {
// 	console.log(`${x} = ${y}`)
// } else (x < y) {
// 	console.log(`${x} < ${y}`)
// }

// const promo = '20%'

// switch (promo) {
//     case '10%':
//         console.log('Dziś mamy 10% zniżki')
//         break
//     case '20%':
//         console.log('Dziś mamy 20% zniżki')
//         break
//     case '30%':
//         console.log('Dziś mamy 30% zniżki')
//         break

//         default:
//             console.log('Dzis jest niestandardowa promka');
// }

// const x = 10
// const y = 2
// const z = x % y

// if ( z === 0) {
//     console.log('Liczba parzysta');
// } else {
//     console.log('Liczba nieparzysta');
// }

// const x = 31
// let text



// if (x >= 100) {
// 	text = 'x > 100'
// } else if (x < 100 && x > 30) {
// 	text =  'x jest średniakiem'
// } else {
// 	text = 'x jest mały'
// }


// console.log(text.toUpperCase());


// const colors = ['blue', 'green', 'red', 'brown', 'yellow', 'black', 'white', 'pink']

// for (let i = 0; i < colors.length; i++)
// {
//     console.log(colors[i]);
// }


// const cities = ['posen', 'warsaw', 'konin', 'gdańsk', 'gdynia', 'sopot']

// for ( let i = 0; i < cities.length; i++) {
//     console.log(`To miasto nazywa się: ` + cities[i]);
// }



// let x = 0

// while (x < 10) {
//     x = x + 2 
//     console.log(x)
// }



// let x = 20

// do {
//     x = x - 3
// } while ( x > 0)

// console.log(x);



// const numbers = [5, 8, 10, 23, 48 ,60]

// for (const number of numbers) {
//     console.log(number / 5)
//  if (number % 2 == 0) {
//     console.log('%cparzysta','background:yellow;color:#333');
// } else {
//     console.log('%cnieparzysta','background:red;color:#333');
// }
// }

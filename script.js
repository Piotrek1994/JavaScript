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
//  const arr = [123, 'gold', 21, true, false, 'green', 'black']

//  console.log(arr);

//  arr.pop()
//  console.log(arr)

//  arr.push('push')
//  console.log(arr)

//  arr.shift()
//  console.log(arr);

//  arr.unshift('tak', 'okej', 'jasiu')
//  console.log(arr);

// const drinks = ['pepsi', 'kawa', 'sok']
// const meals = ['schabowy', 'spaghetti', 'zupa']

// const menu = [...drinks, ...meals]

// console.log(menu);

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0, 2)
// console.log(numbers2);

// const numbers3 = numbers.slice(4, 7)
// console.log(numbers3);

// const colors2 = colors.splice(0, 3)
// console.log(colors2);

// const randomStuff = [...colors]
// console.log(randomStuff);

// const newCars = cars.splice(2, 4, "test")

// console.log(cars);
// console.log(newCars);

// const letters = ['c', 'd']

// letters.push('e', 'f')
// letters.unshift('a', 'b')
// console.log(letters);
// console.log(letters.includes('c'));

// const numbers = [1, 2, 4, 6, 8, 9, 23, 45, 600, 3433]
// const meals = ['schab', 'rosol', 'mielone', 'zur', 'pomidorowa', 'pizza']
// const newArr = [...numbers, ...meals]
// console.log(newArr);

// const numbers = [1, 5, 13, 26, 48]

// function myFunction(x) {
//     return x * 5
// }

// const newNumbers = numbers.map(myFunction)
// console.log(newNumbers)

// for (const numbers2 of newNumbers) {
//     if(numbers2 % 2 === 0) {
//         console.log(`Liczba parzysta ${numbers2}`);
//     } else {
//         console.log(`Liczba nieparzysta ${numbers2}`);
//     }
// }

// const color = ['green']

// color.unshift('blue')
// color.push('red')

// for (let i = 0; i < color.length; i++) {

//     console.log(`Moj ulubiony kolor to: ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`);
// }

// const cars = 'Audi, Mercedes, BMW, Nissan, Dodge'

// const arr = cars.split(', ')
// console.log(arr)

// if (arr.lengt > 3) {
// 	console.log(`Jest ok`)
// } else {
// 	console.log(`Nie jest ok`)
// }

// console.log(arr);

// if (arr.includes('Audi')) {
// 	arr.push('Laborghini')
// } else {
// 	arr.pop()
// }

// console.log(arr);

// Funkcje

// function setnence(arg1, arg2) {
//     console.log(`Cześć, mam na imię ${arg1} i mam ${arg2} lat.`);
// }

// setnence('Piotr', 28);

// const add = (arg1, arg2) => {

//    if (arg1 < arg2){
//     return arg1 + arg2
//    } else {
//        return arg1 - arg2
//    }
// }

// console.log(add(11, 10));

// const arr = [1, 2, 3, 4, 5, 100]

// const arr2 = arr.forEach(arr2 => console.log(arr2))

// const name = 'Lily'

// const test = () => {
// }

// console.log(name);

// const numbers = [0.5, 4, 'abc']
// const names = ['Lisa', 'Lily', 'Adam', 'Przemek']

// numbers.forEach(num => console.log(num *2))

// const bigNames = names.map(name => name.toUpperCase())
// console.log(bigNames);

// let score

// const add = (arg1, arg2) => {
// 	score = arg1 + arg2
// 	score % 2 === 0 ? even() : odd()
// }

// const even = () => {
// 	console.log(`Funkcja #1: liczba ${score} jest parzysta`)
// }
// const odd = () => {
// 	console.log(`Funkcja #2: liczba ${score} jest nieparzysta`)
// }

// add(3, 4)//

// VERSION @

// const add = (arg1, arg2) => {
// 	const score = arg1 + arg2
// 	score % 2 === 0 ? even(score) : odd(score)
// }

// const even = (num) => {
// 	console.log(`Funkcja #1: liczba ${num} jest parzysta`)
// }
// const odd = (num) => {
// 	console.log(`Funkcja #2: liczba ${num} jest nieparzysta`)
// }

// add(3, 6)

// let celsius
// let temp

// const fahrenheit = (arg) => {
//     temp = arg * 1.8 + 32
//     console.log(`${temp}`);

// }

// fahrenheit(123)

// let num = 10
// let numbers = []

// for (let i = 0; i < num; i++) {
// 	numbers.push(i)
// }
// console.log(numbers)

// const divide = arg => {
// 	if (arg % 3 === 0 && arg != 0) {
// 		console.log(`Liczba ${arg} podzielna przez 3`)
// 	} else {
// 		console.log(`Liczba ${arg} nie podzielna przez 3 lub X = 0`)
// 	}
// }

// // numbers.forEach(arg => {
// //     divide(arg)
// // });

// numbers.forEach(divide)

// const divAdd = document.createElement('div')
// document.body.appendChild(divAdd)

// const pAdd = document.createElement('p')
// divAdd.appendChild(pAdd)

// const btn3 = document.querySelector('.btn-3')

// const test = () => {
//     console.log('double click');
// }

// btn3.addEventListener('dblclick', test)

// allCircles.forEach(circle => circle.addEventListner('click', () => console.log(circle)))

// const gold = document.querySelector('.gold')
// const divNew = document.createElement('div')

// gold.append(divNew)

// const ulList = document.createElement('ul')
// document.body.append(ulList)

// for (let i = 1; i < 11; i++) {
//     const liItem = document.createElement('li')
//     liItem.textContent = i
//     ulList.append(liItem)
// }

// const lastItem = document.querySelector('li:last-child')
// console.log(lastItem);

// lastItem.textContent = "Jestem ostatnim elementem."

// lastItem.style.background = 'blue';
// lastItem.style.padding = '20px 40px';
// lastItem.style.fontSize = '48px';

// const p = document.querySelectorAll('p')
// const divSquare= document.querySelector('.square')
// const p1 = document.querySelector('.p1')
// const p2 = document.querySelector('.p2')
// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// console.log(p);
// console.log(divSquare);
// console.log(p1);
// console.log(btn1);
// console.log(btn2);

// //1
// const hello = () => {
//     console.log("cześć");
// }

// //2
// const goldToRed = () => {
//     divSquare.style.background = "red"
// }

//3
// const redToBlue = () => {
//     divSquare.style.background = "blue"
// }

// const toggleClass = () => {
//     p1.classList.toggle('show')
//     p2.classList.toggle('show')

// }

// btn1.addEventListener('dblclick', hello)
// divSquare.addEventListener('mouseover', goldToRed)
// divSquare.addEventListener('mouseout', redToBlue)
// btn2.addEventListener('click', toggleClass)

// const imgNew = document.createElement('img')
// document.body.append(imgNew)

// imgNew.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg')
// imgNew.setAttribute('alt', 'mona lisa')

// const name = () => {
//     console.log('Cokolwiek');
// }

// setTimeout(name, 2000);

// const liItems = document.querySelectorAll('li')
// let number = 1

// // for (const liItem of liItems) {
// //     liItem.dataset.id = number
// //     liItem.textContent = number
// //     number++
// // }

// for (let i = 0; i < liItems.length; i++) {
//     liItems[i].textContent = number
//     liItems[i].dataset.id = number
//     number++
// }

// const thirdLi = document.querySelector('[data-id="3"')
// console.log(thirdLi.closest('.wrapper'));

// function Menu(meal, price) {
// 	this.meal = meal
// 	this.price = price
// }

// const meal1 = new Menu('Pizza', 23)
// const meal2 = new Menu('Pasta', 85)
// const meal3 = new Menu('Ananas', 34)

// Menu.prototype.final = function() {
//     console.log(`${this.meal} kosztuje ${this.price}`);
// }

// meal3.final()

// function Person(name, age) {
// 	this.name = name
// 	this.age = age
// }

// Person.prototype.sayHi = function () {
// 	console.log(`Cześć jestem ${this.name}`)
// }

// const person1 = new Person('Ania', 23)

// person1.sayHi()

// class Person2 {
// 	constructor(name, age) {
// 		this.name = name
// 		this.age = age
// 	}
// 	sayHi() {
// 		console.log(`Cześć jestem ${this.name}`)
// 	}
// }

// const person2 = new Person2('Robert', 254)
// person2.sayHi()


const btn = document.querySelector('button')
const img = document.querySelector('img')
const URL = 'https://dog.ceo/api/breeds/image/random'



btn.addEventListener('click',  () => {
	fetch(URL)
	.then(res => res.json())
	.then(data => img.setAttribute('src', data.message))
	.catch(err => console.log(err))
})
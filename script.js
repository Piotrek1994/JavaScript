/*
    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 🙂 
    slice()
    split()
    toLowerCase()
    toUpperCase()
*/

const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'


const text1Upper = text1.toUpperCase()
console.log(text1Upper);

const text2Lower = text2.toLowerCase()
console.log(text2Lower);

const text3Cut = text3.slice(6,50)
console.log(text3Cut);

const text4Check = text4.includes("czy")
console.log(text4Check);

const text5LogL = text5.charAt(2)
console.log(text5LogL);

const text6Change = text6.replaceAll("pies", "kot")
console.log(text6Change);

const text7Split = text7.split(",")
console.log(text7Split);
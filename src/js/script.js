// let now = new Date();
// let person = new Date('2002-01-22');
// let result = now - person;
// console.log(Math.floor(result / 1000));
// console.log(Math.floor(result / 1000 / 60));
// console.log(Math.floor(result / 1000 / 60 / 60));
// console.log(Math.floor(result / 1000 / 60 / 60 / 24));
// console.log(Math.floor(result / 1000 / 60 / 60 / 24 / 365));

// let day = document.querySelector('#days');
// let hour = document.querySelector('#hours');
// let minute = document.querySelector('#minutes');
// let second = document.querySelector('#seconds');
//
//
// const getZero = (num) =>{
//     if (num < 10){
//         return `0${num}`
//     }
//     return num
// };
//
// const setTimer = () =>{
//
//     let timeId = setInterval(()=>{
//         setValues()
//     },1000);
//     function setValues  () {
//         let dead = new Date('2022-02-19');
//         let now = new Date();
//         let result = Date.parse(dead) - Date.parse(now);
//
//         day.textContent = getZero(Math.floor(result / 1000 / 60 / 60 / 24));
//         hour.textContent = getZero(Math.floor(result / 1000 / 60 / 60) % 24 - 6);
//         minute.textContent = getZero(Math.floor(result / 1000 / 60) % 60);
//         second.textContent = getZero(Math.floor(result / 1000) % 60);
//         if (result <= 0){
//             clearInterval(timeId)
//         }
//             }
// };
//
//
// setTimer();


let day = document.querySelector('#days')
let hour = document.querySelector('#hours')
let minute = document.querySelector('#minutes')
let second = document.querySelector('#seconds')


const getZero = (num) =>{
    if (num < 10){
        return `0${num}`
    }
    return  num
}
setVel()
const setTimer = () => {
    let timer = setInterval(()=>{
            setVel()
    },1000)
    console.log(timer)
}
function setVel (){
    let celebration = new Date('2022-05-03')
    let now = new Date()
    let difference = Date.parse(celebration) - Date.parse(now)
    second.textContent = `${getZero(Math.floor(difference / 1000) % 60)}`
    minute.textContent = `${getZero(Math.floor(difference / 1000 / 60) % 60)}`
    hour.textContent = `${getZero(Math.floor(difference / 1000 / 60 / 60) % 24 - 6)}`
    day.textContent = `${getZero(Math.floor(difference / 1000 / 60 / 60 / 24))}`
}
setTimer()



//
// let seconds = Math.floor(difference / 1000) % 60
// let minutes = Math.floor(difference / 1000 / 60) % 60
// let hours = Math.floor(difference / 1000 / 60 / 60) % 24 - 6
// let days = Math.floor(difference / 1000 / 60 / 60 / 24)
//
// console.log(seconds)
// console.log(minutes)
// console.log(hours)
// console.log(days)





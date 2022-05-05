let A = 10;
let B = 11;
let C = 12;
let D = 13;
let E = 14;
let F = 15;

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + `${A}`
}

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + `${B}`
}

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + `${C}`
}

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + `${D}`
}

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + `${E}`
}


function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + `${F}`
}



function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + number
}

function beraberdir() {
    // toHexadecimal(number);
    let inp = document.getElementById("text");
    let beraber = inp.value
    if (beraber) {
        inp.value = eval(beraber);
    }

}

function gerialma() {
    let inp = document.getElementById("text");
    let geri = inp.value
    inp.value = geri.substring(0, geri.length - 1)
}

function silmek() {
    let inp = document.getElementById("text");
    inp.value = " "
}


// function toHexadecimal(number) {
//     let result = [],
//         i;
//     for (i = number; i > 0; i = parseInt(i / 16)) {
//         result.push(i % 16);
//     }

//     for (i = 0; i < result.length; i++) {
//         switch (result[i]) {
//             case 10:
//                 result[i] = "A"
//                 break;

//             case 11:
//                 result[i] = "B"
//                 break;

//             case 12:
//                 result[i] = "C"
//                 break;

//             case 13:
//                 result[i] = "D"
//                 break;

//             case 14:
//                 result[i] = "E"
//                 break;

//             case 15:
//                 result[i] = "F"
//                 break;

//         }
//     }
//     return result.reverse().join("");


// }
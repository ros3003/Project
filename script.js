// let persone={
//     name:"John",
//     age:24,
//     isMarried:false,
// };
// console.log(persone["name"]);

// let arr=['plum.png','orange.jpg','apple.bmp']
// console.log(arr[0]);

//alert ("Hello world");

//let answer = confirm("Are you here?");

//console.log(answer);

// let answer = +prompt ("есть ли вам 18?", "ДА");

// console.log(typeof(answer));

// console.log("arr"+"-object");

// console.log( 4+"-object");

// let incr= 10,
//     decr= 10;

// console.log (incr++);
// console.log (decr--);

// console.log(5%2);
// console.log("2"=== 2);

// let isChecked=false;
// let isClose=false;

// console.log(isChecked || !isClose);

// if (1) {
//     console.log("ВЕрно")
// } else{
//     console.log("Не верно")
// }

if (num < 49) {
  console.log("Неверно");
} else if (num > 100) {
  console.log("Много");
} else {
  console.log("Верно");
}

num == 50 ? console.log("Верно") : console.log("Верно");

switch (num) {
  case num < 49:
    console.log("Неверно");
    break;
  case num > 100:
    console.log("Много");
    break;
  case num > 80:
    console.log("Все ище много");
    break;
  case 50:
    console.log("Верно");
    break;
  default:
    console.log("что то пошло не так ");
    break;
}

let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }

do {
  console.log(num);
  num++;
} while (num < 55);

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    break;
  }
  console.log(i);
}

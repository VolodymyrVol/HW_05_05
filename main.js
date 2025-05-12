//task 1
// let str = "hello... % 123"
// let letters = 0, digit = 0, other =0;
// for( let i in str)
// {
//     if(str[i] >= 0 && str[i] <= 9)
//     {
//         digit++;
//     }
//     else if((str[i]>='A' && str[i]<='Z')||(str[i]>='a' && str[i]<='z'))
//     {
//         letters++;
//     }
//     else
//     {
//         other++;
//     }
// }
// document.writeln(`Количество букв: ${letters} <br> Количество цыфр: ${digit} <br>Количество остальных символов: ${other}`);
//task2
// let num = 35;

// let tens = ["Десять","Одинадцать","Двенадцать","Тринадцать","Четырнадцать","Пятнадцать","Шестнадцать","Семьнадцать","Восемьнадцать","Девятнадцать"];
// let first = ["Двадцать","Тридцать","Сорок","Пятьдесят","Шестьдесят","Семьдесят","Восемьдесят","Девяносто"];
// let second = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
// if(num < 10 || num > 99)
// {
//     document.writeln("Введено не двузначное число");
// }
// else if (num >= 10 && num < 20)
// {
//     document.writeln(tens[num-10]);
// }
// else 
// {
//     num = num.toString()
//     if(num[1] == 0)
//     {
//         document.writeln(first[num[0] - 2]);
//     }
//     else {
//         document.writeln(first[num[0] - 2] + " " + second[num[1] - 1]);
//     }
// }
//task 3
// let str = "hello WORLD 123123"
// let res = '';
// for(let letter in str)
// {
//     if(str[letter]>'a' && str[letter]<'z')
//     {
//         res += str[letter].toUpperCase();
//     }
//     else if(str[letter]>"A" && str[letter]<'Z')
//     {
//         res += str[letter].toLowerCase();

//     }
//     else if(str[letter] > 0 && str[letter] < 9)
//     {
//         res += "_";
//     }
//     else 
//     {
//         res += str[letter];
//     }
// }
// document.writeln(res);
//task 4 
// let kebab = "text-align"
// let res = kebab.split("-");
// let toup = res[1].charAt(0).toUpperCase() + res[1].slice(1);
// document.writeln(res[0] + toup);
//task5
// let str = "cascading style sheets";
// let a = str.split(' ');
// let res = '';
// for (let i in a)
// {
//     res += a[i][0].toUpperCase();
// }
// document.writeln(res);

//task 6
// function joinStr() {
//     res = "";
//     for(let i in arguments) {
//         res += arguments[i];
//     }
//     return res;
// }
// document.writeln(joinStr("hello", " ", "world"));

//task 7
// function calc(task) {
//     let ex = task.split(" ");
//     a = parseFloat(ex[0]);
//     b = parseFloat(ex[2]);
//     if(task.indexOf("+") !== -1) {
//         document.writeln(`${a} + ${b} = ${a+b}`)
//     }
//     else if (task.indexOf("-") !== -1){
//         document.writeln(`${a} - ${b} = ${a-b}`)
//     }
//     else if(task.indexOf("*") !== -1){
//         document.writeln(`${a} * ${b} = ${a*b}`)
//     }
//     else if(task.indexOf("/") !== -1) {
//         document.writeln(`${a} / ${b} = ${a/b}`)
//     }
//     else 
//     {
//         alert('err');
//     }
// }
// calc("4 / 2");

//task 8
// function task8(url) {
//   const parts = url.split('/');
//   document.writeln("Протокол: " + parts[0].replace(':', '') + "<br>");
//   document.writeln("Домен: " + parts[2] + "<br>");
//   document.writeln("Путь: /" + parts.slice(3).join('/') + "<br>");
// }
// task8("https://itstep.org/ua/about");

//task9
// function task9(str, sym) {
//     let res = [];
//     let buff = '';
//     for(let i in str)
//     {
//         if(str[i] === sym)
//         {
//             res.push(buff);
//             buff = '';
//         }
//         else {
//             buff += str[i];
//         }
//     }
//     res.push(buff);
//     document.writeln(res);
// }
// task9("10/02/2024", "/");

//task 10
function task10(mainstr) {
  for(let i in arguments)
  {
    mainstr = mainstr.replace("%" + i, arguments[i]);
  }
  document.writeln(mainstr);
}
task10('first num %1, second %2, third %3', 2, 123123, 123123)
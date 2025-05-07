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
import {greet} from "./modules/Greeting.js";
import {celsiusToFohrenheit} from "./modules/Degree.js";
import {calculateFallDistance} from "./modules/Fall Distance.js";
import {calculateAverage} from "./modules/Average.js";
import {concatStrings} from "./modules/Concat.js"

greet();
alert(celsiusToFohrenheit(prompt("Введите градусы Цельсия")));
alert(calculateFallDistance(prompt("Введите время падения")));
let firstNum,secondNum,thirdNum;
firstNum=parseInt(prompt("Введите первое число"));
secondNum=parseInt(prompt("Введите второе число"));
thirdNum=parseInt(prompt("Введите третье число"));
alert(calculateAverage(firstNum, secondNum, thirdNum));
concatStrings(prompt("Введите два слова через пробел"));

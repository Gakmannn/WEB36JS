import './style.scss'
console.log('Hello world')
document.write('<div id="main" style="background: lightblue;">dfgdfgdf</div>')

a = 25

var a = 0
console.log(a)
var a = 2
console.log(a)

// cоздание переменной
let newVar = 5
newVar = 15

let noVal
noVal = 'g'
console.log(noVal)

let theValue

// cоздание константы
const DAY_IN_WEEK = 7
// Ошибка не можем изменять константы
// DAY_IN_WEEK = 8

const countedSum = a + newVar

console.log('10 + 5 =', 10+5)
console.log('10 - 5 =', 10-5)
console.log('10 * 5 =', 10*5)
console.log('10 / 5 =', 10/5)
console.log('10 ** 5 =', 10**5) //возведение в степень
console.log('10 % 5 =', 10%5)   //остаток от деления
console.log('3 % 2 =', 3%2)   //остаток от деления


// let userInput = prompt('Введите число', 10)
// console.log(userInput)
// console.log(typeof userInput)
// userInput = parseInt(userInput)
// console.log(userInput)
// console.log(typeof userInput)


console.log('456')
console.log(456)

console.log((5-5%2)/2)

// alert('Вы ввели ' + userInput)


// Практика 1. Задание 1
// Запросите у пользователя число, возведите это число во 2 - ю степень и выведите на экран.
// let num = parseInt(prompt('Введите число',4))
// alert ('Ваше число, возведённое во 2 степень' + num**2)

console.log(typeof 12)
console.log(typeof 12.6)
console.log(typeof (12.6/0))
console.log(typeof 12n)
console.log(12.6/0)
console.log(parseInt('a'))
console.log(parseInt('12.5adasd'))
console.log(parseFloat('12.5adasd'))
console.log(+'12.5adasd')
console.log(+'12.5')
console.log(Number('12.5'))
console.log(String(12.5))
console.log(12.5.toString())
console.log(typeof '12')
console.log(typeof true)
console.log(typeof false)
console.log(typeof [])
console.log(typeof {})
console.log(typeof undefined)
let variable
console.log(variable)
console.log(null)
console.log(typeof null)
console.log(typeof alert)
console.log(typeof '')
console.log(`В этой строке мы сложим 2 числа ${newVar + 5}. Вот так`)
console.log('В этой строке мы сложим 2 числа ' + (newVar+5) + '. Вот так')

// В JavaScript есть 8 основных типов данных.

// Семь из них называют «примитивными» типами данных:
// number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253 - 1).
// bigint для целых чисел произвольной длины.
// string для строк.Строка может содержать ноль или больше символов, нет отдельного символьного типа.
// boolean для true / false.
// null для неизвестных значений – отдельный тип, имеющий одно значение null.
// undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
// symbol для уникальных идентификаторов.
// И один не является «примитивным» и стоит особняком:
// object для более сложных структур данных.
// Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.

// Имеет две формы: typeof x или typeof (x).
// Возвращает строку с именем типа.Например, "string".
// Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.
// В следующих главах мы сконцентрируемся на примитивных значениях, а когда познакомимся с ними, перейдём к объектам.

let num1 = 1
let num2 = 2
console.log(2 > 1)
console.log(num1 == num2)
console.log(num1 != num2)
console.log(num1 != 1)
console.log(num1 == 1)
console.log(num1 === 1)
console.log(1 === +'1')

console.log(+false)
console.log(+true)

// Все значения, которы станут false при преобразовании в булев тип
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(false))

console.log('z' > 'Z')

console.log(null === undefined)
console.log(null == undefined)
console.log(null == null)

console.log(isNaN(NaN))
console.log(isNaN(1))

// Операторы сравнения возвращают значения логического типа.
// Строки сравниваются посимвольно в лексикографическом порядке.
// Значения разных типов при сравнении приводятся к числу.Исключением является сравнение с помощью операторов строгого равенства / неравенства.
// Значения null и undefined равны == друг другу и не равны любому другому значению.
// Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, которые могут принимать значения null / undefined.Хорошей идеей будет сделать отдельную проверку на null / undefined.

let year = 2015
let month = 1

if (year == 2015) {
  console.log('yes')
}

if (year==2015) {
  console.log('yes')
} else {
  if (month==1) {
    console.log('mo==1')
  }
  console.log('no')
}

if (year==2015) {
  console.log('yes')
} else if (year==2010) {
  console.log('maybe')
} else {
  console.log('no')
}

let age = 18
let message
if (age>16) {
  message='hello'
} else {
  message='too yang'
}
console.log(message)


// переменная = (условие) ? Значение, которое присвоится в случае истинности условия : Значение, которое присвоится в случае ложности условия
message = age > 16 ? 'hello' : 'too yang'

message = (age < 3) ? 'Здравствуй, малыш!' :
          (age < 18) ? 'Привет!' :
          (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст!'

if (age<3) {
  message = 'Здравствуй, малыш!'
} else {
  if (age < 18) {
    message = 'Привет!'
  } else {
    if (age < 100) {
      message = 'Здравствуйте!'
    } else {
      message = 'Какой необычный возраст!'
    }
  }
}

const isThursday = new Date().getDate() == 22 ? true : false
console.log(isThursday)

let x = '1'
switch (x) {
  case '1':  // if (x === '1')
    console.log('x=1')
    break
  case '2':  // if (x === '2')
    console.log('x=2')
    break
  default:
    console.log('x не 1 и не 2')
}

console.log(true || true)   
console.log(false || true)  
console.log(true || false)  
console.log(false || false)

// Оператор || выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд конвертирует в логическое значение.Если результат true, останавливается и возвращает исходное значение этого операнда.
// Если все операнды являются ложными(false), возвращает последний из них.
console.log(0 || 0 || 'gfdg' || 0)
console.log(0 || 0 || 0 || null)

let aStr = ''
let bStr = 'Default'

aStr ||= bStr
aStr = aStr ? aStr : bStr
console.log(aStr)

console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)

// Оператор && выполняет следующие действия:

// Вычисляет операнды слева направо.
// Каждый операнд преобразует в логическое значение.Если результат false, останавливается и возвращает исходное значение этого операнда.
// Если все операнды были истинными, возвращается последний.
// Другими словами, И возвращает первое ложное значение.Или последнее, если ничего не найдено.
console.log(1 && 11 && 'gfdg' && 'sdf')
console.log('' && 0 && 0 && null)

aStr = 'Hello'

aStr &&= aStr + ' user'
aStr = aStr ? aStr + '!' : aStr
console.log(aStr)

// Оператор ! принимает один аргумент и выполняет следующие действия:

// Сначала приводит аргумент к логическому типу true / false.
// Затем возвращает противоположное значение.

console.log(!true)
console.log(!false)
console.log(!!1)
console.log(Boolean(1))
console.log(!!0)
console.log(Boolean(0))


// while (условие) {
   // код
   // также называемый "телом цикла"
// }

// Цикл с предусловием
let i = 0
while (i<5) {
  i++
  console.log(i)
}

// Цикл с постусловием
i = 0
do {
  i++
  console.log(i)
} while(i<0)

// for (начало; условие; шаг) {
  // ... тело цикла ...
  // }
  
for (let i=3; i < 5; i++ ) {
  if (i==3) continue
  console.log(i)
  break
}

// break - выход из цикла
// continue - переход на следующую итерацию без выполнения оставшегося тела цикла

//  0, 1 
//  2, 3

// [ [0,1],
//   [2,3] ]

for (let x=0; x<2; x++) {
  for (let y=0; y<2; y++) {
    console.log(`(x:${x}, y:${y})`)
  }
}

// Вывести # столько раз, сколько указал пользователь.
let start = 0
let userInput = 1
let text = ''
while (start < userInput) {
  text = text + '#'
  start ++
}
console.log(text)

// Пользователь ввел число, а на экран вывелись все числа от введенного до 0

userInput = 10
text = ''
while (userInput) {
  text = text + userInput +'_'
  userInput--
}
console.log(text)

// Запросить число и степень. Возвести число в указанную степень и вывести результат.
let num = 10
let count = 3
let result = 1
while (count) {
  result *= num
  count--
}
console.log(result)
{
// Запросить 2 числа и найти все общие делители.
let num1 = 75
let num2 = 15
let text = ''
let min = num1 < num2 ? num1 : num2
while (min) {
  if (num1 % min == 0 && num2%min == 0) {
    text += min + '_'
  }
  min--
}
console.log(text)
}

let arr = [
  {i:1, name: '1asdasasd'},
  {i:2, name: '2asdasasd'},
  {i:3, name: '3asdasasd'},
  {i:4, name: '4asdasasd'},
  {i:5, name: '5asdasasd'},
]

for (let i=0; i<arr.length; i++) {
  document.body.insertAdjacentHTML('beforeend', `<p>${arr[i].i} <b>${arr[i].name}</b></p>`)
}

let res = 1000
i=0
while(true) {
  res/=2
  i++
  if (res<50) break
}
console.log(res, `за ${i} итераций`)

res = 1000
i = 0
while (res>50) {
  res /= 2
  i++
}
console.log(res, `за ${i} итераций`)

res = 1000
i = 0
do {
  res /= 2
  i++
} while (res > 50)
console.log(res, `за ${i} итераций`)

res = 1000
i = 0
for (i = 0; res>50; i++) {
  res /= 2
}
console.log(res, `за ${i} итераций`)

// x+=1  |  x = x + 1
// x-=1  |  x = x - 1
// x*=1  |  x = x * 1
// x**=1 |  x = x ** 1
// x/=1  |  x = x / 1
// x%=1  |  x = x % 1

// function имя(параметры) {
//   ...тело...
// }

console.log(message)
function showMessage() {
  message = 'asfsdfsd'
  console.log('Всем привет! '+message)
  // Если функция явно ничего не возвращает, то неявно возвращается undefined
  // return undefined
}

console.log(showMessage())
console.log(message)

// Чистая функция функция не изменяет глобальные значения, а её результат всегда один и тот же при соответствующем значении входных параметров
// Параметры - это внутренние именованные переменные функции
// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.
function sum(a:number,b:number) {
  console.log(a)
  console.log(b)
  return a+b
}

let sumOf2And4 = sum(2,4)

console.log(sumOf2And4)

// Второй параметр b становится не обязательным, а его значение по умолчанию равняется 100
// Значения по умолчанию устанавливаются для параметров справа на лево
function max(a:number, b=100) {
  return a > b ? a : b
}

console.log(max(101))

function getSum() {
  let sum = 0
  // console.log(a)
  // console.log(arguments)
  for (let i =0; i<arguments.length; i++ ) {
    sum += arguments[i]
  }
  return sum
}

// @ts-ignore
console.log(getSum(1,2,43,55,546543,35,3))

function getSumRest(...rest:number[]) {
  let sum = 0
  // console.log(a)
  console.log(rest)
  for (let i =0; i<arguments.length; i++ ) {
    sum += arguments[i]
  }
  return sum
}

console.log(getSumRest(1,2,43,55,546543,35,3))

const string = 'ABC'
for(let i=0; i<string.length; i++) {
  console.log(string[i])
}
for(let char of string) {
  console.log(char)
}
const array = [1,2,3]
for(let i=0; i<array.length; i++) {
  console.log(array[i])
}
for(let el of array) {
  console.log(el)
}
const obj = {
  a:1,
  b:2,
  c:3
} as Record<string, number>
for(let i=0; i<Object.keys(obj).length; i++) {
  const key = Object.keys(obj)[i]
  console.log(key, obj[key])
}
for(let key in obj) {
  console.log(key, obj[key])
}

function powRecursive(x: number, n: number):number {
  // return n == 1 ? x : x * powRecursive(x, n - 1)
  if (n==1) {
    console.log('Условие выхода стработало')
    return x
  } else {
    console.log(n)
    let result
    console.log(result = x * powRecursive(x, n - 1))
    return result
  }
}

console.log(powRecursive(2,4))

// function maxDethPowRecursive(x: number, n: number):number {
//   console.log(n)
//   return n == 1 ? x : x * maxDethPowRecursive(x, n - 1)
// }

// maxDethPowRecursive(1,100000)

function powFor(x: bigint, n: number) {
  let result = 1n;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(powFor(2n,100))

// Написать функцию, которая выводит переданное ей число задом наперед.
// Например: число 1234 вывести как 4321.

function getReverseNumber(n: number):number {
  if (n<10) {
    return n
  } else {
    return +(n % 10 + '' + getReverseNumber(Math.floor(n/10)))
  }
}

console.log(getReverseNumber(1234))

// Написать функцию, которая считает сумму цифр числа.
// Например: число 1357, сумма 1 + 3 + 5 + 7 = 16.

function getSumOfDigits(n: number): number {
  if (n < 10) {
    return n
  } else {
    return n % 10 + getSumOfDigits(Math.floor(n / 10))
  }
}

console.log(getSumOfDigits(1357))

// Написать функцию, которая принимает число и выводит 
// соответствующее количество вложенных пар круглых скобок.
// Например: число 4 – (((())))


function getBracketsPairsByNum(n: number): string {
  if (!n) {
    return '' 
  } else {
    return '(' + getBracketsPairsByNum(n-1) + ')'
  }
}

// getBracketsPairsByNum(4) = '(' + getBracketsPairsByNum(3)== '((()))' + ')'     = (((())))
// getBracketsPairsByNum(3) = '(' + getBracketsPairsByNum(2)== '(())' + ')'       = ((()))
// getBracketsPairsByNum(2) = '(' + getBracketsPairsByNum(1)== '()' + ')'         = (())
// getBracketsPairsByNum(1) = '(' + getBracketsPairsByNum(0)== '' + ')'           = ()

console.log(getBracketsPairsByNum(4))

const object = {
  b:2,
  d:1,
  C:1,
  'a':12,
  1:'sdfs',
  obj: {
    z:888
  },
  'two words': 'fsdf',
} as Record<string, any>

object.newProp = 15
console.log(object)
// Можем получить доступ к значению ключа через квадраьные скобки и занчение ключа строкой
// ?так мы можем получить любое значение (даже если ключ число или состоит из нескольких слов)
console.log(object['1'])
console.log(object['obj'])
console.log(object['obj'].z)

// Можем получить доступ к значению ключа через точку и имя ключа 
// ! выдаст ошибку, если ключ число или состоит из нескольких слов
console.log(object.b)
console.log(object.two)
// Опциональная цепочка
// ? Позволяет обращаться к вложенным ключам без ошибки, даже если значение не установлено
console.log(object.obj1)
console.log(object.obj1?.z)
try {
  object.obj1.z
} catch(e:any) {
  console.log(e.message)
}
console.log(object['two words'])
delete object['two words']
delete object.a
for (let key in object) {
  console.log(key)
  console.log(object[key])
}

const jsonObj = JSON.stringify(object)
console.log(jsonObj)
console.log(JSON.parse(jsonObj))

{

  let a=1
  let b=a
  console.log(a,b)
  a++
  console.log(a,b)
  console.log(a==b)
  
  const obj1 = {a:1}
  const obj2 = obj1
  const obj3 = {...obj1}

  console.log(obj1, obj2, obj3)
  obj1.a++
  console.log(obj1, obj2, obj3)
  console.log(obj1 == obj2)
  // @ts-ignore
  console.log({} == {})
  // @ts-ignore
  console.log({a:1} == {a:1})


}


// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом.

type Fraction = {
  numerator:number,
  denominator:number
}

const fraction1:Fraction = {
  numerator: 1,
  denominator: 2
}

const fraction2 = {
  numerator: 3,
  denominator: 10
} as Fraction

function transformToCommonDenominator(fr1: Fraction, fr2: Fraction) {
  return {
    fr1: {
      numerator: fr1.numerator*fr2.denominator,
      denominator: fr1.denominator*fr2.denominator
    },
    fr2: {
      numerator: fr2.numerator * fr1.denominator,
      denominator: fr1.denominator * fr2.denominator
    }
  }
}

// 1 Функция сложения 2 - х объектов - дробей.

function getSumOfFractions(fr1:Fraction, fr2:Fraction) {
  const commonFractions = transformToCommonDenominator(fr1, fr2)
  return {
    numerator: commonFractions.fr1.numerator + commonFractions.fr2.numerator,
    denominator: commonFractions.fr1.denominator
  }
}

console.log(getSumOfFractions(fraction1, fraction2))

function getRedusedSumOfFractions(fr1: Fraction, fr2: Fraction) {
  const result = getSumOfFractions(fr1, fr2)
  return getReductedFraction(result)
}

console.log(getRedusedSumOfFractions(fraction1, fraction2))

// 2 Функция вычитания 2 - х объектов - дробей.

function getSubtrOfFractions(fr1: Fraction, fr2: Fraction) {
  const commonFractions = transformToCommonDenominator(fr1, fr2)
  const result = {
    numerator: commonFractions.fr1.numerator - commonFractions.fr2.numerator,
    denominator: commonFractions.fr1.denominator
  }
  return getReductedFraction(result)
}

console.log(getSubtrOfFractions(fraction1, fraction2))

// 3 Функция умножения 2 - х объектов - дробей.

function getMulOfFractions(fr1: Fraction, fr2: Fraction) {
  const result = {
    numerator: fr1.numerator * fr2.numerator,
    denominator: fr1.denominator * fr2.denominator
  }
  return getReductedFraction(result)
}

console.log(getMulOfFractions(fraction1, fraction2))

// 4 Функция деления 2 - х объектов - дробей.

function getDivOfFractions(fr1: Fraction, fr2: Fraction) {
  const result = {
    numerator: fr1.numerator * fr2.denominator,
    denominator: fr1.denominator * fr2.numerator
  }
  return getReductedFraction(result)
}

console.log(getDivOfFractions(fraction1, fraction2))

// 5 Функция сокращения объекта - дроби.

function getReductedFraction(fr:Fraction) {
  const min = fr.numerator<fr.denominator? fr.numerator:fr.denominator
  for (let i=min;i>1; i--) {
    if (fr.numerator%i==0 && fr.denominator%i==0) {
      fr.numerator /=i
      fr.denominator /=i
      return getReductedFraction(fr)
    }
  }
  return fr
}

interface Rectangle {
    topLeft: { x: number, y: number };
    bottomRight: { x: number, y: number };
}
function getRectangleInfo(rect: Rectangle): void {
    console.log(`Верхний левый угол: (${rect.topLeft.x}, ${rect.topLeft.y})`);
    console.log(`Нижний правый угол: (${rect.bottomRight.x}, ${rect.bottomRight.y})`);
}
function getWidth(rect: Rectangle): number {
    return Math.abs(rect.bottomRight.x - rect.topLeft.x);
}
function getHeight(rect: Rectangle): number {
    return Math.abs(rect.bottomRight.y - rect.topLeft.y);
}
function getArea(rect: Rectangle): number {
    return getWidth(rect) * getHeight(rect);
}
function getPerimeter(rect: Rectangle): number {
    return 2 * (getWidth(rect) + getHeight(rect));
}
function changeWidth(rect: Rectangle, change: number): void {
    rect.bottomRight.x += change;
}
function changeHeight(rect: Rectangle, change: number): void {
    rect.bottomRight.y += change;
}
function changeWidthAndHeight(rect: Rectangle, widthChange: number, heightChange: number): void {
    changeWidth(rect, widthChange);
    changeHeight(rect, heightChange);
}
function moveX(rect: Rectangle, shiftX: number): void {
    rect.topLeft.x += shiftX;
    rect.bottomRight.x += shiftX;
}
function moveY(rect: Rectangle, shiftY: number): void {
    rect.topLeft.y += shiftY;
    rect.bottomRight.y += shiftY;
}
function moveXY(rect: Rectangle, shiftX: number, shiftY: number): void {
    moveX(rect, shiftX);
    moveY(rect, shiftY);
}
function isPointInside(rect: Rectangle, point: { x: number, y: number }): boolean {
    return point.x >= rect.topLeft.x && point.x <= rect.bottomRight.x && point.y >= rect.topLeft.y && point.y <= rect.bottomRight.y;
}
let rectangle: Rectangle = {
    topLeft: { x: 0, y: 0 },
    bottomRight: { x: 5, y: 5 }
}
getRectangleInfo(rectangle);
// console.log("Ширина:", getWidth(rectangle));
// console.log("Высота:", getHeight(rectangle));
// console.log("Площадь:", getArea(rectangle));
// console.log("Периметр:", getPerimeter(rectangle));
// changeWidth(rectangle, 3);
// console.log("Новая ширина:", getWidth(rectangle));
// changeHeight(rectangle, 2);
// console.log("Новая высота:", getHeight(rectangle));
// changeWidthAndHeight(rectangle, 2, 1);
// console.log("Новая ширина:", getWidth(rectangle));
// console.log("Новая высота:", getHeight(rectangle));
// moveXY(rectangle, 1, -1);
// getRectangleInfo(rectangle);
// console.log("Точка (3, 3) находится внутри прямоугольника?", isPointInside(rectangle, { x: 3, y: 3 }));

const rectElement = document.getElementById('rect') as HTMLDivElement
function initRect(rect: Rectangle, rectEl: HTMLDivElement) {
  rectEl.style.width = getWidth(rect)*10+'px'
  rectEl.style.height = getHeight(rect)*10+'px'
  rectEl.style.top = rect.topLeft.y+'px'
  rectEl.style.left = rect.topLeft.x+'px'
}
initRect(rectangle, rectElement)

const topLeftButton = document.getElementById('topLeft') as HTMLDivElement
const topButton = document.getElementById('top') as HTMLDivElement
const topRightButton = document.getElementById('topRight') as HTMLDivElement
const leftButton = document.getElementById('left') as HTMLDivElement
const rightButton = document.getElementById('right') as HTMLDivElement
const bottomLeftButton = document.getElementById('bottomLeft') as HTMLDivElement
const bottomButton = document.getElementById('bottom') as HTMLDivElement
const bottomRightButton = document.getElementById('bottomRight') as HTMLDivElement

const addHeightButton = document.getElementById('addHeight') as HTMLDivElement
const addWidthButton = document.getElementById('addWidth') as HTMLDivElement
const reduceHeightButton = document.getElementById('reduceHeight') as HTMLDivElement
const reduceWidthButton = document.getElementById('reduceWidth') as HTMLDivElement

addHeightButton.addEventListener('click', ()=>{
  changeHeight(rectangle, 1)
  initRect(rectangle, rectElement)
})
reduceHeightButton.addEventListener('click', ()=>{
  changeHeight(rectangle, -1)
  initRect(rectangle, rectElement)
})
addWidthButton.addEventListener('click', ()=>{
  changeWidth(rectangle, 1)
  initRect(rectangle, rectElement)
})
reduceWidthButton.addEventListener('click', ()=>{
  changeWidth(rectangle, -1)
  initRect(rectangle, rectElement)
})

topLeftButton.addEventListener('click', ()=>{
  moveXY(rectangle, -10, -10)
  initRect(rectangle, rectElement)
})
topButton.addEventListener('click', ()=>{
  moveY(rectangle, -10)
  initRect(rectangle, rectElement)
})
topRightButton.addEventListener('click', ()=>{
  moveXY(rectangle, 10, -10)
  initRect(rectangle, rectElement)
})
leftButton.addEventListener('click', ()=>{
  moveX(rectangle, -10)
  initRect(rectangle, rectElement)
})
rightButton.addEventListener('click', ()=>{
  moveX(rectangle, 10)
  initRect(rectangle, rectElement)
})
bottomLeftButton.addEventListener('click', () => {
  moveXY(rectangle, -10, 10)
  initRect(rectangle, rectElement)
})
bottomButton.addEventListener('click', () => {
  moveY(rectangle, 10)
  initRect(rectangle, rectElement)
})
bottomRightButton.addEventListener('click', () => {
  moveXY(rectangle, 10, 10)
  initRect(rectangle, rectElement)
})

{

  let a:number 
  a = 1
  const b:string = 'a'
  console.log(b == 'b')

  let c = 143612
  let d = 'adasddas'
  const z = 'fdsdsdffsd'

  type MyVars = {
    a: number,
    b: string,
    c: number,
    d?: string,
    z?: string,
    da?: number,
  }

  const myVars:MyVars = {
    'a': a, 
    b:b,
    c,
    d,
    z,
  }
  
  console.log(myVars)
  console.log(myVars.a)
  console.log(myVars['b'])
  delete myVars.d
  delete myVars['z']
  console.log(myVars)
  myVars.d = '3132'
  console.log(myVars)
  myVars.da = 3132
  console.log(myVars)

  function getMySum(a:number,b:number) {
    console.log(a,b)
    return a + b
  }
  function getMyConcat(a:string,b:string) {
    return a + ' ' + b
  }

  console.log(getMySum(5,5))
  console.log(getMyConcat('5','sdfsdfsd'))

  function getSumOfAllNumbersInObjectAndN(obj:MyVars, n:number) {
    return obj.da ? obj.a + obj.c + obj.da + n : obj.a + obj.c + n
  }

  const obj2:MyVars = {
    a: 54,
    b: '14365',
    c: 646
  }

  console.log(getSumOfAllNumbersInObjectAndN(myVars, 5))
  console.log(getSumOfAllNumbersInObjectAndN(obj2, 55))

  console.log([])
  console.log([
    0,
    3,
    1,
    2,
  ])
  console.log(new Array(5))
  
  const myArr = ['d','sdf','sdfsd']
  console.log(myArr)
  for (let el of myArr) {
    console.log(el)
  }
  for (let i=0;i<myArr.length;i++) {
    console.log(i, myArr[i])
  }
  
  console.log(myArr.push('sdfsdf','sdfs'))
  console.log(myArr)
  
  console.log(myArr.pop())
  console.log(myArr)

  console.log(myArr.unshift('1','342'))
  console.log(myArr)
  
  
  console.log(myArr.shift())
  console.log(myArr)
  
  myArr[3] = ''
  console.log(myArr)
  
  delete myArr[3]
  console.log(myArr)
  
  // полная копия массива
  const arr1 = myArr.slice()
  console.log(arr1)
  
  // копия массива со 2 индекса до 4 не включая 4
  const arr2 = myArr.slice(2,4)
  console.log(arr2)
  
  // начиная с 3его индекса, удалить 1 элемент
  const arr3 = myArr.splice(3,1)
  console.log(arr3)
  console.log(myArr)

  if (arr1) {
    console.log('массив существует')
  }
  
  if (arr1.length) {
    console.log('в массиве есть данные в количестве ' + arr1.length )
  }
  
  if ([].length) {
    console.log('в массиве есть данные' )
  } else {
    console.log('в массиве нет данных' )
  }


  function addToArray(arr:string[], index:number, newEl:string) {
    arr.splice(index, 0, newEl)
    return arr
  }

  console.log(myArr)
  console.log(addToArray(myArr, 2, 'newEl: string'))
  
}

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

// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ -
// ходимое количество и куплен или нет.Написать несколько функ -
// ций для работы с таким массивом.

type product = {
  name: string,
  count: number,
  isBuyed: boolean,
}

// const strArr:boolean[]=['dasd',1,{},true]

const toBuyList:product[] = [
  {name: 'молоко', count:1, isBuyed: true},
  {name: 'картофель', count:1, isBuyed: false},
  {name: 'макароны', count:1, isBuyed: false},
  {name: 'сыр', count:1, isBuyed: true},
  {name: 'хлеб', count:1, isBuyed: false},
]

// 1  Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
const toBuyListOL = document.getElementById('toBuyList') as HTMLOListElement
// console.log(toBuyListOL)

function renderBuyList(arr:product[]) {
  let html = ''
  for (let el of arr) {
    if (!el.isBuyed) {
      html += `<li style="color:red">${el.name} ${el.count} <button data-name="${el.name}">Отметить купленным</button></li>`
    }
  }
  for (let el of arr) {
    if (el.isBuyed) {
      html += `<li style="color:green">${el.name} ${el.count}</li>`
    }
  }
  toBuyListOL.innerHTML = html
}

renderBuyList(toBuyList)

// 2 Добавление покупки в список.Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ -
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.

const productNameInput = document.getElementById('productName') as HTMLInputElement
const productCountInput = document.getElementById('productCount') as HTMLInputElement
const addProductButton = document.getElementById('addProduct') as HTMLButtonElement

function addToBuyList(arr:product[], name:string, count:number) {
  let inList = false
  for (let el of arr) {
    if (el.name == name && !el.isBuyed) {
      el.count+=count
      inList = true
    }
  }
  if (!inList) {
    arr.push({name, count, isBuyed:false})
  }
  renderBuyList(arr)
}
addToBuyList(toBuyList, 'картофель', 2)

addProductButton.addEventListener('click', function() {
  const count = parseFloat(productCountInput.value.replace(',', '.'))
  addToBuyList(toBuyList, productNameInput.value, count)
  productNameInput.value = ''
  productCountInput.value = ''
})

// 3 Покупка продукта.Функция принимает название продукта
// и отмечает его как купленный.

const setBuyedButton = document.getElementById('setBuyed') as HTMLButtonElement

function setBuyed(arr: product[], name: string) {
  for (let el of arr) {
    if (el.name == name) {
      el.isBuyed = true
    }
  }
  renderBuyList(arr)
}

setBuyed(toBuyList, 'картофель')

setBuyedButton.addEventListener('click', function() {
  setBuyed(toBuyList, productNameInput.value)
  productNameInput.value = ''
  productCountInput.value = ''
})

toBuyListOL.addEventListener('click', function(e) {
  const target = e.target as HTMLElement
  if (target.tagName == 'BUTTON' && target.dataset.name) {
    setBuyed(toBuyList, target.dataset.name)
  }
})


// Создать массив из 10 случайных чисел.
// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.

const arr1: number[] = [0, 4, 6, 5, 8, 5, 3, 3, 8, 0]
const arr2: number[] = [5, 8, 1, 9, 3]

// function fillArrayRandomNumbers(arr:number[], length:number) {
//   for (let i=0; i<length; i++) {
//     arr.push(Math.floor(Math.random()*10))
//   }
// }

// fillArrayRandomNumbers(arr1, 10)
// fillArrayRandomNumbers(arr2, 5)

console.log(arr1)
console.log(arr2)
console.log(arr2.includes(0))

// 1 Функция принимает 2 массива и возвращает новый массив, 
// в котором собраны все элементы из двух массивов без повторений.

function getUnionArray(arr1: number[], arr2: number[]) {
  const arr:number[] = []
  for (let el of arr1) {
    if (!arr.includes(el)) {
      arr.push(el)
    }
  }
  for (let el of arr2) {
    if (!arr.includes(el)) {
      arr.push(el)
    }
  }
  return arr
}

console.log(getUnionArray(arr1,arr2))

// 2 Функция принимает 2 массива и возвращает новый массив,
//   в котором собраны общие элементы(то есть элементы,
//   которые встречаются и в первом и во втором массивах)
//   без повторений.

function getCommonUnionArray(arr1: number[], arr2: number[]) {
  const arr: number[] = []
  for (let el of arr1) {
    if (arr1.includes(el) && arr2.includes(el)) {
      if (!arr.includes(el)) {
        arr.push(el)
      }
    }
  }
  return arr
}

console.log(getCommonUnionArray(arr1, arr2))

// 3 Функция принимает 2 массива и возвращает новый мас -
//   сив, в котором собраны все элементы из первого массива,
//   которых нет во втором массиве.

function getNotCommonUnionArray(arr1: number[], arr2: number[]) {
  const arr: number[] = []
  for (let el of arr1) {
    if (!arr2.includes(el)) {
      if (!arr.includes(el)) {
        arr.push(el)
      }
    }
  }
  return arr
}

console.log(getNotCommonUnionArray(arr1, arr2))

// Создать массив css - стилей(цвет, размер шрифта, выравнива -
// ние, подчеркивание и т.д.).Каждый элемент массива – это объ -
// ект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// < p > </>, добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.

const styles = [
  {color:'red'},
  {'font-size':'20px'},
  {'text-align':'center'},
]
const styles2 = [
  {color:'green'},
  {'font-size':'16px'},
  {'text-align':'center'},
]

const renderTextDiv = document.getElementById('renderText') as HTMLDivElement

function renderText(styles:any[], text:string) {
  let styleText = ''
  for (let el of styles) {
    for (let key in el) {
      styleText += `${key}:${el[key]};`
    }
  }
  const tagString = `<p style="${styleText}">${text}</p>`
  // renderTextDiv.insertAdjacentHTML('beforeend', tagString)
  renderTextDiv.innerHTML+=tagString
}

renderText(styles, 'test1')
renderText(styles2, 'test2')


const PZ22z2Div = document.getElementById('PZ22z2') as HTMLDivElement
PZ22z2Div.innerHTML = `
<p>hdgkjdgjdf</p>
<p>hdgkjdgjdf</p>
`


// Получение объекта элемента по id
const PZ22z3Div = document.getElementById('PZ22z3') as HTMLDivElement
PZ22z3Div.innerHTML = `
<p>3333hdgkjdgjdf</p>
<p>444hdgkjdgjdf</p>
`


{

  // !Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения
  let arr = [1, 2]

  // создать массив из: arr и [3,4]
  console.log(arr.concat([3, 4]))

  // создать массив из: arr и [3,4] и [5,6]
  console.log(arr.concat([3, 4], [5, 6]))

  // создать массив из: arr и [3,4], потом добавить значения 5 и 6
  console.log(arr.concat([3, 4], 5, 6))
  console.log(arr)
  
  console.log(Math.PI)
  
  let text = ''
  toBuyList.forEach(function (el,i,arr) {
    if (i%2==0) {
      text+=`${el.name}, ${el.count}; `
    }
  })
  console.log(text)

  function forEach(arr:any[], func:Function) {
    for (let i=0; i<arr.length; i++) {
      func(arr[i], i, arr)
    }
  }

  forEach(toBuyList, function (el:any, i:number) {
    if (i % 2 == 0) {
      text += `${el.name}, ${el.count}`
    }
  })
  forEach(toBuyList, (el:any, i:number) => {
    if (i % 2 == 0) {
      text += `${el.name}, ${el.count}`
    }
  })
  console.log(text)

  const arrN = [1,2,1,2,4,5,7, NaN,1,5,1]
  
  // !arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае - 1.
  
  console.log(arrN.indexOf(1))
  console.log(arrN.indexOf(1,5))
  console.log(arrN.indexOf(NaN))
  
  // Если в массиве есть значение 7, вывести его индекс
  const index = arrN.indexOf(7)
  if (index>=0) {
  // if (index!=-1) {
    console.log(`Значение 7 находится на ${index} позиции`)
  }

  console.log(arrN.lastIndexOf(1))
  console.log(arrN.lastIndexOf(1,5))
  
  // !arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен.
  
  console.log(arrN.includes(8))
  console.log(arrN.includes(7))
  console.log(arrN.includes(7,8))
  console.log(arrN.includes(NaN))

  console.log(toBuyList)
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
  let result = toBuyList.find(function (item, index, array) {
    return item.isBuyed
  })
  console.log(result)
  
  // возвращает номер индекса, первого элемента для которого функция вернула true, в противном случае - 1
  let i = toBuyList.findIndex(function (item, index, array) {
    return item.count>5
  })
  console.log(i)
  
  // возвращает номер индекса, первого элемента с конца массива для которого функция вернула true, в противном случае - 1
  i = toBuyList.findLastIndex(function (item, index, array) {
    return item.isBuyed
  })
  i = toBuyList.findLastIndex(item => item.isBuyed)
  console.log(i)
  
  // если `true` -- элемент добавляется к results и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
  let results = toBuyList.filter(function (el, i) {
    return !el.isBuyed
  })
  console.log(results)
  
  let html = ''
  toBuyList.filter(el => !el.isBuyed).forEach(el=>{
    html+=`<p>${el.name} ${el.count}</p>`
  })
  toBuyList.filter(el => el.isBuyed).forEach(el=>{
    html+=`<p>${el.name} ${el.count}</p>`
  })

  console.log(html)
  
  html = ''
  console.log(+true)
  console.log(+false)
  toBuyList.sort((a, b) => +a.isBuyed - +b.isBuyed).forEach(el => {
    html += `<p>${el.name} ${el.count}</p>`
  })

  // Map вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
  // let result = arr.map(function (item, index, array) {
    // возвращается новое значение вместо элемента
  // });

  console.log(toBuyList.map(el => el.name))
  console.log(toBuyList.map(el => el.count))
  console.log(toBuyList.map(el => el.isBuyed))
  console.log(toBuyList.map(el => `<p>${el.name} ${el.count}</p>`))
  console.log(toBuyList.map(el => `<p>${el.name} ${el.count}</p>`).join(''))
  console.log(toBuyList)
  console.log(html)

  console.log(toBuyList.map(function (el) {
    let str = ''
    str += '***' + el.name + '***'
    return str
  }))
  console.log(toBuyList.map(el => '***' + el.name + '***'))
  console.log(toBuyList.map(el => {
    let str = ''
    str += '***' + el.name + '***'
    return str
  }))

  // Стрелочная функция - это короткий и лаконичный тип записи анонимной функции
  // Если у стрелочной функции нет фигурных скобок,- она неявно возвращает значение указанное после стрелки
  console.log(toBuyList.map(el => el.name))
  // Если у стрелочной функции есть фигурные скобки, то возврат значения надо делать явно
  console.log(toBuyList.map(el => {return el.name}))
  // Если у стрелочной функции 0 или больше одного параметра, то необходимо ставить круглые скобки
  console.log(toBuyList.map(() => 'секрет'))
  console.log(toBuyList.map((el,i) => `${el.name}, индекс ${i}` ))

  console.log([1,2,3,4,5,6].map(el=>el*10))

  let arrZ = [1, 2, 15, 32,15, 12, 31,32]
  
  function compareNumeric(a:number, b:number) {
    console.log(a,b)
    if (a > b) return 1
    if (a < b) return -1
    return 0
  }

  console.log(arrZ.sort(compareNumeric))

  // Получение объекта элемента по id
  const PZ22z3Div = document.getElementById('PZ22z3') as HTMLDivElement
  

  // Сравнение чисел
  console.log(arrZ.sort((a,b)=>a-b))
  console.log(arrZ.sort((a,b)=>b-a))
  
  console.log(['a','sd','t'].reverse())
  // Сравнение строк
  console.log(['a', 't', 'sd'].sort((a, b) => a.localeCompare(b)))
  
  let names = 'Вася, Петя, Маша'
  
  const namesArr = names.split(', ')
  console.log(namesArr)
  console.log(namesArr.join('; '))
  

}

console.log(Boolean(0))
console.log(!!0)
console.log(!![].length)
console.log(!![14].length)

{
  const arr = [1,2,3,5,4,6]
  while (arr.length) {
    let a = arr.shift()
    console.log(a)
  }
  const arr2 = [4,5,6]
  arr.push(1,2,3)
  console.log(arr)
  arr.push(...arr2)
  console.log(arr)
  arr.unshift(3,2,1)
  console.log(arr)
  arr.unshift(...arr2.reverse())
  console.log(arr)

  console.log(arr.slice())
  console.log(arr.slice(6))
  console.log(arr.slice(9,11))
  console.log(arr.slice(0,6))
  
  console.log(arr.splice(6, 0, 0))
  console.log(arr)

  const arr3 = [1,2,3,4,5]
  arr3.fill(5)
  console.log(arr3)

  // !Методы изменяющие массив
  // pop, push, shift, unshift, splice, sort, reverse, fill
  // !Методы не изменяющие массив
  // slice, concat

  function indexOf(arr:any[],val:any,j=0):number {
    for (let i=j; i < arr.length; i++) {
      if (arr[i]==val) return i
    }
    return -1
  }

  console.log(indexOf(arr,4))

  function lastIndexOf(arr:any[], val:any) {
    let i = arr.indexOf(val, 0)
    let lastIndex = i
    while (i!=-1) {
      i = arr.indexOf(val, i+1)
      if (i != -1) lastIndex = i
    }
    return lastIndex
  }
  console.log(lastIndexOf(arr, 5))
  
  arr.push(...arr3)

  function allIndexOf(arr:any[], val:any) {
    let i = arr.indexOf(val, 0)
    let lastIndex = [i]
    while (i!=-1) {
      i = arr.indexOf(val, i+1)
      if (i != -1) lastIndex.push(i)
    }
    return lastIndex
  }
  console.log(allIndexOf(arr, 5))

  // Методы для массивов примитивов (всего, кроме объектов)
  // indexOf/lastIndexOf и includes

  // Методы для массивов объектов
  // find и findIndex/findLastIndex, filter

  // @ts-ignore
  console.log({a:1}=={a:1})

  const objArr = [
    {a:1},
    {a:2},
    { a: 5, b: 4 },
    {a:3},
    { a: 5, b: 5},
    {a:4},
    { a: 5, b: 6},
    {a:6},
    {a:5,b:7},
  ]

  const findedObj = objArr.find((el)=>el.a==5 && el.b==7)
  console.log(findedObj)
  
  const findedObjs = objArr.filter((el)=>el.a==5 )
  console.log(findedObjs)


  type Employee = {
    name: string,
    department: string,
    salary: number
  }
  const employees: Employee[] = [
    { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
    { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
    { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
    { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
    { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
    { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
    { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
    { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
  ]

  const newArr = employees.map(el => el.name.split(' ')[1] + ' ' + el.name.split(' ')[2] )
  console.log(newArr)
  
  newArr.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]))
  
  console.log(newArr)


  let sum = arr3.reduce((sum, item) => sum+=item,0)
  let mul = arr3.reduce((acc, item) => acc*=item)
  let div = arr3.reduce((div, item) => div/=item)
  console.log(sum)
  console.log(mul)
  console.log(div)
  let allSalary = employees.reduce((sum, el) => sum+=el.salary,0)
  console.log(allSalary)
  let allSalaryStr = employees.reduce((sum, el) => sum+=el.salary+' ','')
  console.log(allSalaryStr)
  let allSalaryStr1 = employees.reduce((sum, el) => Object.assign(sum, { [el.name]:el.salary }),{} as any)
  console.log(allSalaryStr1)
 
  console.log(arr3.some(el=>el%2==1))
  console.log(arr3.every(el=>el%2==1))

}

{
  console.log(String)
  console.log(String('sdfs'))
  console.log(Number('12'))
  console.log(+'12')
  
  const str = 'dfas'
  console.log(str.toUpperCase())
  console.log(str)

  // ?Все примитивы, кроме null и undefined, предоставляют множество полезных методов.
  // ?Формально эти методы работают с помощью временных объектов, но движки JavaScript внутренне очень хорошо оптимизируют этот процесс, так что их вызов не требует много ресурсов.

}

{
  // !Числа
  let billion = 1_000_000_000
  billion = 1e9  // 1 миллиард, буквально: 1 и 9 нулей
  let ms = 1e-6 // шесть нулей слева от 1

  let a = 0b11111111 // двоичная (бинарная) форма записи числа 255
  let b = 0o377 // восьмеричная форма записи числа 255
  let с = 0xff // шестнадцатиричная форма записи числа 255

  a == b // true, с двух сторон число 255
  b == с // true, с двух сторон число 255

  // Метод num.toString(base) возвращает строковое представление числа num в системе счисления base
  console.log(255.0.toString())
  console.log(255.0.toString(2))
  console.log(255.0.toString(8))
  console.log(255.0.toString(16))
  console.log(255.0.toString(36))
  
  let num = 255
  num.toString()
  
  console.log(parseInt('73',36))
  console.log(parseInt('7v'))
  console.log(parseInt('ff', 16))

//   Math.floor
// Округление в меньшую сторону: 3.1 становится 3, а - 1.1 — -2.
//   Math.ceil
// Округление в большую сторону: 3.1 становится 4, а - 1.1 — -1.
//   Math.round
// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а - 1.1 — -1.
//   Math.trunc 
// Производит удаление дробной части без округления: 3.1 становится 3, а - 1.1 — -1


// Эти функции охватывают все возможные способы обработки десятичной части.Что если нам надо округлить число до n - ого количества цифр в дробной части ?
// Например, у нас есть 1.2345 и мы хотим округлить число до 2 - х знаков после запятой, оставить только 1.23.

// Есть два пути решения:

// !Умножить и разделить.
// Например, чтобы округлить число до второго знака после запятой, мы можем умножить число на 100, вызвать функцию округления и разделить обратно.
//   let num = 1.23456;
//   alert(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.
//   let num = 12.34;
//   alert(num.toFixed(1)); // "12.3"
// Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round:

//   let num = 12.36;
//   alert(num.toFixed(1)); // "12.4"
// Обратите внимание, что результатом toFixed является строка.Если десятичная часть короче, чем необходима, будут добавлены нули в конец строки:

//   let num = 12.34;
//   alert(num.toFixed(5)); // "12.34000", добавлены нули, чтобы получить 5 знаков после запятой
// Мы можем преобразовать полученное значение в число, используя унарный оператор + или Number(), пример с унарным оператором: +num.toFixed(5).

  // !Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата. Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round

}

{
  
  // !Неточные вычисления
  // !потеря точности

  console.log(0.1.toString(2))
  console.log(0.2.toString(2))
  console.log(0.3.toString(2))
  console.log(0.4.toString(2))
  console.log(0.5.toString(2))
  console.log(0.6.toString(2))
  console.log(0.7.toString(2))
  console.log(0.8.toString(2))
  console.log(0.9.toString(2))
  
  console.log((0.311*0.14*2).toFixed(2))
  console.log((1.1+1.2))
  console.log((0.1+0.9))
  
  console.log((0.1 + 0.2).toFixed(2) == (0.3).toFixed(2))
  
  console.log(9999999999999999)
  
  console.log(Math.random())
  // !Не равильное распределение вероятности
  console.log(Math.round(Math.random()*(100-50)+50))
  
  // !Правильное распределение вероятности
  function randomInteger(min: number, max: number) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  console.log(1.35.toFixed(30))
  console.log(2.35.toFixed(30))
  console.log(3.35.toFixed(30))
  console.log(4.35.toFixed(30))
  console.log(5.35.toFixed(30))
  console.log(6.35.toFixed(30))
  console.log(7.35.toFixed(30))
  console.log(8.35.toFixed(30))
  console.log(9.35.toFixed(30))


// ?Чтобы писать числа с большим количеством нулей:

// Используйте краткую форму записи чисел – "e", с указанным количеством нулей.Например: 123e6 это 123 с 6 - ю нулями 123000000.
// Отрицательное число после "e" приводит к делению числа на 1 с указанным количеством нулей.Например: 123e-6 это 0.000123(123 миллионных).

// ?Для других систем счисления:
// Можно записывать числа сразу в шестнадцатеричной(0x), восьмеричной(0o) и бинарной(0b) системах счисления
//   parseInt(str, base) преобразует строку в целое число в соответствии с указанной системой счисления: 2 ≤ base ≤ 36.
//   num.toString(base) представляет число в строковом виде в указанной системе счисления base.

// ?Для проверки на NaN и Infinity:
//   isNaN(value) преобразует аргумент в число и проверяет, является ли оно NaN
//   Number.isNaN(value) проверяет, является ли аргумент числом, и если да, то проверяет, является ли оно NaN
//   isFinite(value) преобразует аргумент в число и проверяет, что оно не является NaN / Infinity / -Infinity
//   Number.isFinite(value) проверяет, является ли аргумент числом, и если да, то проверяет, что оно не является NaN / Infinity / -Infinity

// ?Для преобразования значений типа 12pt и 100px в число:
// Используйте parseInt / parseFloat для «мягкого» преобразования строки в число, данные функции по порядку считывают число из строки до тех пор пока не возникнет ошибка.

// ?Для дробей:
// Используйте округления Math.floor, Math.ceil, Math.trunc, Math.round или num.toFixed(precision).
//     Помните, что при работе с дробями происходит потеря точности.

// ?Ещё больше математических функций: в документации по объекту Math.Библиотека маленькая, но содержит всё самое важное.


}

{
  // !Строки

  console.log('a'.length)
  console.log('😁'.length)
  
  console.log('a'[1])

  // !Строки неизменяемы
  let str = 'Hi'
  // str[0] = 'h' // ошибка

  let str2 = str[0].toLowerCase() + str.slice(1)
  console.log(str)
  console.log(str2)
  
  console.log('Interface'.toUpperCase())
  console.log('Interface'.toLowerCase())
  console.log('Interface'[0].toLowerCase())
  
  str = 'widget with id'
  console.log(str.indexOf('Widget'))
  console.log(str.indexOf('widget'))
  console.log(str.indexOf('w',1))

  str = 'Ослик Иа-Иа посмотрел на виадук'
  
  function findAll(str:string, target:string) {
    const arr = []
    let pos = -1;
    while ((pos = str.indexOf(target, pos+1)) != -1) {
      arr.push(pos)
    }
    return arr
  }

  console.log(findAll('Ослик Иа - Иа посмотрел на виадук', 'Иа'))
  console.log("Widget with id".includes("Widget"))
  console.log("Midget".includes("id", 3))
  
  // Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой
  
  console.log("Midget".startsWith("id"))
  console.log("Midget".startsWith("id",1))
  console.log("Midget".startsWith("Mid"))
  console.log("Midget".endsWith("id", 3))
  console.log("Midget".endsWith("et", 3))
  console.log("Midget".endsWith("et"))
  
  // В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.
  // str.slice(start[, end])
  // Также для start / end можно задавать отрицательные значения.Это означает, что позиция определена как заданное количество символов с конца строки:
  console.log("Midget".slice())
  console.log("Midget".slice(1))
  console.log("Midget".slice(1,3))
  console.log("Midget".slice(-5,-3))
  
  // str.substring(start[, end])
  // Возвращает часть строки между start и end(не включая) end.
  // Это — почти то же, что и slice, но можно задавать start больше end.
  // Если start больше end, то метод substring сработает так, как если бы аргументы были поменяны местами.
  console.log(str.substring(2, 6))
  console.log(str.substring(6, 2).trim())
  // Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0.

  // Метод trim убирает пробельные символы с обоих сторон строки
  // Метод trimStart убирает пробельные символы слева
  // Метод trimEnd убирает пробельные символы справа

  // str.substr(start[, length])
  // Возвращает часть строки от start длины length.
  // В противоположность предыдущим методам, этот позволяет указать длину вместо конечной позиции
  console.log(str.substr(2, 4))
  
  console.log("z".codePointAt(0))
  console.log("Z".codePointAt(0))
  console.log("я".codePointAt(0))
  console.log("Я".codePointAt(0))
  console.log("😁".codePointAt(0))
  console.log(String.fromCodePoint(128513))
  
  str = ''
  for (let i = 128513; i <= 128613; i++) {
    str += String.fromCodePoint(i)
  }
  console.log(str)
  
  // !Правильное сравнение
  // «Правильный» алгоритм сравнения строк сложнее, чем может показаться, так как разные языки используют разные алфавиты.
  // Поэтому браузеру нужно знать, какой язык использовать для сравнения.

  // К счастью, все современные браузеры(для IE10− нужна дополнительная библиотека Intl.JS) поддерживают стандарт ECMA 402, обеспечивающий правильное сравнение строк на разных языках с учётом их правил.
  // Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

  // Отрицательное число, если str меньше str2.
  // Положительное число, если str больше str2.
  // 0, если строки равны.
  //     Например:

  // alert('Österreich'.localeCompare('Zealand')); // -1
  // У этого метода есть два дополнительных аргумента, которые указаны в документации.Первый позволяет указать язык(по умолчанию берётся из окружения) — от него зависит порядок букв.Второй — определить дополнительные правила, такие как чувствительность к регистру, а также следует ли учитывать различия между "a" и "á".

  // !Итого
  // Есть три типа кавычек.Строки, использующие обратные кавычки, могут занимать более одной строки в коде и включать выражения ${…}.
  // Строки в JavaScript кодируются в UTF - 16.
  // Есть специальные символы, такие как разрыв строки \n.
  // Для получения символа используйте[] или метод at.
  // Для получения подстроки используйте slice или substring.
  // Для того, чтобы перевести строку в нижний или верхний регистр, используйте toLowerCase / toUpperCase.
  // Для поиска подстроки используйте indexOf или includes / startsWith / endsWith, когда надо только проверить, есть ли вхождение.
  // Чтобы сравнить строки с учётом правил языка, используйте localeCompare.
  // Строки также имеют ещё кое - какие полезные методы:
  // str.trim() — убирает пробелы в начале и конце строки.
  // str.repeat(n) — повторяет строку n раз.
  // …и другие, которые вы можете найти в справочнике.


  console.log('Ослик Иа - Иа посмотрел на виадук'.replace('Иа', 'AI'))
  console.log('Ослик Иа - Иа посмотрел на виадук'.replaceAll('Иа', 'AI'))


}
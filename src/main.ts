import './style.scss'

setTimeout(() => console.log('*****Hello world*****'),0)

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
  str = ''
  for (let i = 1; i <= 310; i++) {
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


  function checkPalindrom(str:string) {
    str = str.toLowerCase()
    return str == str.split('').reverse().join('')
  }

  console.log(checkPalindrom('Алла'))
  console.log(checkPalindrom('папа'))
  console.log(checkPalindrom('1221'))
  console.log(checkPalindrom('12521'))
  console.log('папа'.split(''))
  console.log('папа'.split('').reverse())
  console.log('папа'.split('').reverse().join(''))

  function sayDigitName(d:number) {
    // if (0==d) return 'Да это ж ноль'
    if (Object.is(-0, d)) {
      return 'минус ноль'
    }
    return 'ноль'
  }
  console.log(sayDigitName(0))
  console.log(sayDigitName(-0))
}

// !Значение this – это объект «перед точкой», который используется для вызова метода.
// «this» не является фиксированным
// Значение this вычисляется во время выполнения кода, в зависимости от контекста.
function sayHi() {
  // @ts-ignore
  return (this?.name)
}
const user1 = {
  name: '1',
  // sayHi: sayHi,
}

// Вызов без объекта: this == undefined
console.log(sayHi())
// Передаём this при помощи метода call
console.log(sayHi.call(user1))

// console.log(user1.sayHi())

const user2 = {
  name: 2,
  sayHi: sayHi,
}
console.log(user2.sayHi())
// нет разницы между использованием точки или квадратных скобок для доступа к объекту
console.log(user2['sayHi']())

// У стрелочных функций нет «this»
// стрелочные функции являются особенными – у них нет this. Когда внутри стрелочной функции обращаются к this, то его значение берётся извне
// let user = {
//   firstName: "Ilya",
// !Рекомендованный способ записи методов
//   sayHi() {
//     let arrow = () => console.log(this.firstName)
//     arrow()
//   }
// }

// В стрелочных функциях нет совоего this
let user = {
  firstName: "Ilya",
  // @ts-ignore
  sayHi: () => console.log(this?.firstName)
}

user.sayHi()

let a1 = 'sfdfsdf'.split('').reverse().join('').toLowerCase()
console.log(a1)

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function () { // показывает текущую ступеньку
    console.log(this.step)
    return this
  }
}

ladder.up().up().down().showStep().down().showStep().down()

{
  // Идентичные записи
  // let func = (arg1, arg2, ...argN) => expression
  // let func = function (arg1, arg2, ...argN) {
  //   return expression
  // };

  const func = (a: number, b: number) => a + b
  console.log(func(1,1))

  console.log([1, 2, 3].reduce((a, el) => a + el))
  console.log([
    {name:1},
    {name:2},
    {name:3},
    ].map(a => a.name))


// Стрелочные функции:
// Не имеют this.
// Не имеют arguments.
// Не могут быть вызваны с new.
// У них также нет super
// Всё это потому, что они предназначены для небольшого кода, который не имеет своего «контекста», выполняясь в текущем.И они отлично справляются с этой задачей!
}

{
  // Опциональная цепочка ?. — это безопасный способ доступа к свойствам вложенных объектов, даже если какое-либо из промежуточных свойств не существует

  type MyVars = {
    a: number,
    b?: {c:number},
  }

  const arr:MyVars[] = [
    { a: 1, b: { c: 1 } },
    { a: 2 },
    { a: 3, b: { c: 2 } },
    { a: 4 },
    { a: 5, b: { c: 3 } },
  ]

  arr.forEach(el=>{
    // console.log(el.a, el.b?.c)
    el.b ? console.log(el.a, el.b?.c) : console.log(el.a, el.b)
  })

//   Синтаксис опциональной цепочки?.имеет три формы:

//   obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
//   obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
//   obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined.
//    Как мы видим, все они просты и понятны в использовании. ?.проверяет левую часть на null / undefined и позволяет продолжить вычисление, если это не так.

//    Цепочка?.позволяет безопасно получать доступ к вложенным свойствам.

//    Тем не менее, мы должны использовать?.осторожно, только там, где по логике кода допустимо, что левая часть не существует.Чтобы он не скрывал от нас ошибки программирования, если они возникнут.

  let user = {

  } as any

  // Опциональная цепочка не может использоваться слева от оператора присваивания
  // то же самое что написать undefined = "John"
  // Ошибка, не работает
  // user.fullname?.name = "John"; 
  if (user.fullname) {
    user.fullname.name = "John"
  }

}

{

// Object.keys, values, entries
// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар[ключ, значение].

  const employe = { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 }

  console.log(Object.keys(employe))
  console.log(Object.values(employe))
  console.log(Object.entries(employe))

}

{
  // Деструктурирующее присваивание
  // у нас есть массив с именем и фамилией
  let arr = ["Ilya", "Kantor"]

  // деструктурирующее присваивание
  // записывает firstName = arr[0]
  // и surname = arr[1]
  let [firstName, surname] = arr

  console.log(firstName)
  console.log(surname)

  ;[firstName, surname] = "Ilya Kantor".split(' ')
  console.log(firstName)
  console.log(surname)

  {
    let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
    console.log(title)
  }

  let user = {} as any
  ;[user.name, user.surname] = "Ilya Kantor".split(' ')
  console.log(user.name, user.surname)

  // цикл по ключам и значениям
  for (let [key, value] of Object.entries(user)) {
    console.log(key, value)
  }

  // Трюк обмена переменных
  // Существует хорошо известный трюк для обмена значений двух переменных с использованием деструктурирующего присваивания:

  let guest = "Jane"
  let admin = "Pete"

  // Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
  ;[guest, admin] = [admin, guest]
  console.log(guest, admin)
  
  let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
  console.log(rest)
  
  {
    // @ts-ignore
    let [firstName, surname] = []
    console.log(firstName, surname)
  }

  let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  let { height, title, width } = options
  console.log(title, width, height)
  
  // Двоеточие показывает «что : куда идёт»
  let { width: w, height: h, title: t } = options
  console.log(t, w, h)

  {
    let options = {
      title: "Menu"
    } as any
    let { width = 100, height = 200, title } = options
    console.log(title, width, height)
  }

}

{
// Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.

  function calculator(str:string):number {
    str = str.replaceAll(' ', '')
    if (str.includes('+')) {
      const arr = str.split('+')
      let sum = 0
      arr.forEach(el => sum += +calculator(el))     
      return sum
    } else if (str.includes('-')) {
      const arr = str.split('-')
      let sum = +calculator(arr[0])
      arr.forEach((el, i) => sum -= i ? +calculator(el) : 0)
      return sum
      // return +calculator(arr[0]) - (+calculator(arr[1]))
    } else if (str.includes('*')) {
      const arr = str.split('*')
      let sum = 1 
      arr.forEach(el => sum *= +calculator(el))     
      return sum
      // return +calculator(arr[0]) * (+calculator(arr[1]))
    } else if (str.includes('/')) {
      const arr = str.split('/')
      let sum = +arr[0] 
      arr.forEach((el, i) => sum /= i ? +calculator(el): 1)     
      return sum
      // return +calculator(arr[0]) / (+calculator(arr[1]))
    }
    return +str
  }
  console.log(calculator('18 + 9 * 7 / 2 / 3.5 - 5 + 10 * 2 * 4'))
  console.log(calculator('8 * 89/8 + 1'))
  // console.log(calculator('88 / 8'))
  // console.log(calculator('81 - 9'))

}


{

  // Функции - конструкторы технически являются обычными функциями.Но есть два соглашения:

  // Имя функции - конструктора должно начинаться с большой буквы.
  // Функция - конструктор должна выполняться только с помощью оператора "new".
  
  const User = (function (this:any, name:string) {
    this.name = name
    this.isAdmin = false
    this.isStudent = true
    this.sayHi = function () {
      return "Меня зовут: " + this.name
    }
  }) as any
  
  const Student = (function (this:any, name:string, learning:boolean) {
    this.name = name
    this.isStudent = learning
  }) as any

  let user = new User("Jack")
  user.isAdmin = true
  for (let key in user) {
    console.log(key)
  }

  let user1 = new User("Jack2")

  const userArr = [
    new Student("Jack", true),
    new Student("Ann", false),
    new Student("Jane", true),
  ]

  console.log(userArr)

  console.log(user1)
  console.log(user)
  console.log(user1.sayHi())
  console.log(user.sayHi())
  console.log({ name: 'Jack2', isAdmin: false })
  console.log(user.name)
  console.log(user.isAdmin)

// Когда функция вызывается как new User(...), происходит следующее:

// Создаётся новый пустой объект, и он присваивается this.
// Выполняется тело функции.Обычно оно модифицирует this, добавляя туда новые свойства.
// Возвращается значение this.
// Другими словами, new User(...) делает что - то вроде:

//   function User(name) {
//     this = {};  (неявно)

//     добавляет свойства к this
//     this.name = name;
//     this.isAdmin = false;

//     return this;  (неявно)
//   }

}

{
  // Классы

  // В объектно - ориентированном программировании класс – это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения(свойства) и реализацию поведения(методы).

  // class MyClass {
  //   методы класса
  //   constructor() { ... }
  //   method1() { ... }
  //   method2() { ... }
  //   method3() { ... }
  // ...
  // }

  class User {
    name = ''
    #isAdmin = false
    isStudent = true
    constructor(name:string) {
      this.name = name
    }
    sayHi() {
      return "Меня зовут: " + this.name
    }
    get isAdmin() {
      return this.#isAdmin
    }
  }

  const user = new User('Jack')


  console.log(user.isAdmin)

  console.log(user)
  for (let key in user) {
    console.log(key)
  }
  // const newUser = new user.constructor('new')
  // console.log(newUser)

  console.log(user.sayHi())

  const usrArr = [
    new User('Jack'),
    new User('Jack1'),
    new User('Jack2'),
  ]

  console.log(usrArr)

  // класс - это функция
  console.log(typeof User)

  // ...или, если точнее, это метод constructor
  console.log(User === User.prototype.constructor)

  // Методы находятся в User.prototype, например:
  console.log(User.prototype.sayHi)

  // в прототипе ровно 2 метода
  console.log(Object.getOwnPropertyNames(User.prototype))

}

{

  // Есть только два ограничения:
  // Ссылки не могут идти по кругу.JavaScript выдаст ошибку, если мы попытаемся назначить __proto__ по кругу.
  // Значение __proto__ может быть объектом или null.Другие типы игнорируются.

  let animal = {
    name: "animal",
    eats: true,
    // __proto__: null,
    walk() {
      return this.name + " walk"
    },
    sleep() {
      this.isSleeping = true
    },
    wakeUp() {
      this.isSleeping = false
    }
  } as any

  let rabbit = {
    isSleeping: false,
    name: 'rabbit',
    jumps: true,
    __proto__: animal,
    toString() {
      return 'белый кролик'
    }
  } as any

  rabbit.walk = function() {
    return 'Rabbit! Bounce - bounce!'
  }

  console.log(rabbit.toString())

  let longEar = {
    earLength: 10,
    __proto__: rabbit
  }

  // console.log(rabbit.isSleeping)
  // rabbit.sleep()
  // console.log(rabbit.isSleeping)
  // rabbit.wakeUp()
  // console.log(rabbit.isSleeping)
  animal.sleep()
  console.log(animal.isSleeping)
  console.log(rabbit.isSleeping)

  console.log(rabbit.jumps)
  rabbit.eats = false
  console.log(rabbit.eats)
  console.log(animal.eats)
  console.log(rabbit)

  for (let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    console.log(`${isOwn ? 'Собственное ': 'Унаследованное '}`+key)
  }
  // Китайская копия (потеряли прототип)
  console.log({...rabbit})

  // Полная копия (качественная)
  let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));
  console.log(clone)

  console.log(Object.keys(rabbit))
  console.log(animal.walk())
  console.log(rabbit.walk())
  
  let obj = {}
  console.log(obj)
  console.log(longEar)

// В JavaScript все объекты имеют скрытое свойство[[Prototype]], которое является либо другим объектом, либо null.
// Мы можем использовать obj.__proto__ для доступа к нему(исторически обусловленный геттер / сеттер, есть другие способы, которые скоро будут рассмотрены).
// Объект, на который ссылается[[Prototype]], называется «прототипом».
// Если мы хотим прочитать свойство obj или вызвать метод, которого не существует у obj, тогда JavaScript попытается найти его в прототипе.
// Операции записи / удаления работают непосредственно с объектом, они не используют прототип(если это обычное свойство, а не сеттер).
// Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj.Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.
// Цикл for..in перебирает как свои, так и унаследованные свойства.Остальные методы получения ключей / значений работают только с собственными свойствами объекта.

}

{
  let obj = {} as any

  console.log(obj.toString())
  console.log(obj.__proto__ === Object.prototype)
  console.log(obj.__proto__.__proto__)
  // obj.toString === obj.__proto__.toString === Object.prototype.toString
  
  console.log([1])

  let arr = [1, 2, 3] as any

  // наследует ли от Array.prototype?
  console.log(arr.__proto__ === Array.prototype)

  // затем наследует ли от Object.prototype?
  console.log(arr.__proto__.__proto__ === Object.prototype)

  // и null на вершине иерархии
  console.log(arr.__proto__.__proto__.__proto__)

  console.dir([1])

  let obj1 = {
    0: "Hello",
    1: "world!",
    length: 2,
  }
  console.log(obj1)
  const objArr = Array.from(obj1)
  console.log(objArr)

// Все встроенные объекты следуют одному шаблону:
// Методы хранятся в прототипах(Array.prototype, Object.prototype, Date.prototype и т.д.).
// Сами объекты хранят только данные(элементы массивов, свойства объектов, даты).
// Примитивы также хранят свои методы в прототипах объектов - обёрток: Number.prototype, String.prototype, Boolean.prototype.Только у значений undefined и null нет объектов - обёрток.
// Встроенные прототипы могут быть изменены или дополнены новыми методами.Но не рекомендуется менять их.Единственная допустимая причина – это добавление нового метода из стандарта, который ещё не поддерживается движком JavaScript.

  console.log({})
  console.log(Object.create(null))

}

{

  class Animal {
    speed:number
    name: string
    constructor(name:string) {
      console.log('0',this)
      this.speed = 0;
      this.name = name;
      console.log('1',this)
    }
    run(speed:number) {
      this.speed = speed;
      return (`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      return  (`${this.name} стоит неподвижно.`);
    }
  }

  let animal = new Animal("Мой питомец");

  class Rabbit extends Animal {
    age:number
    constructor(name:string, age=0) {
      super(name)
      console.log('2', this)
      this.age = age
      console.log('3', this)
    }
    hide() {
      super.stop()
      return (`${this.name} прячется!`);
    }
  }

  let rabbit = new Rabbit("Белый кролик");
  // const rabbitFarm = [
  //   new Rabbit("Белый кролик"),
  //   new Rabbit("Белый1 кролик"),
  //   new Rabbit("Белый2 кролик"),
  //   new Rabbit("Белый3 кролик"),
  // ]

  // console.log(rabbitFarm)

  console.log(rabbit)
  console.log(rabbit.run(5))
  console.log(rabbit.hide())
  console.log(rabbit.speed)

}

{

// Реализовать класс PrintMachine, которой состоит из:
// ■ размера шрифта;
// ■ цвета шрифта;
// ■ семейства шрифта;
// ■ метода print(), который принимает текст и печатает его соответствующим шрифтом.
// Создать объект такого класса и продемонстрировать работу метода.

  const pmDiv = document.getElementById('pm') as HTMLDivElement
  class PrintMachine {
    tag:string
    fSize:string
    color: string
    fFamily: string
    constructor(fSize: string, color: string, fFamily: string, tag = 'p') {
      this.tag = tag
      this.fSize = fSize
      this.color = color
      this.fFamily = fFamily
    }
    print(text:string) {
      pmDiv.innerHTML += `<${this.tag} style="font-size:${this.fSize};font-family:${this.fFamily}; color: ${this.color}">${text}</${this.tag}>`
    }
  }

  class ExtendedPrintMachine extends PrintMachine {
    fontStyle: string
    constructor(fSize: string, color: string, fFamily: string, fontStyle:string, tag = 'p' ) {
      super(fSize, color, fFamily, tag)
      this.fontStyle = fontStyle
    }
    print(text: string) {
      pmDiv.innerHTML += `<${this.tag} style="font-style:${this.fontStyle};font-size:${this.fSize};font-family:${this.fFamily}; color: ${this.color}">${text}</${this.tag}>`
    }
  }

  PrintMachine
  const redPM = new ExtendedPrintMachine('50px', 'red', 'Arial', 'italic')
  redPM.print('asdas asdasd sa')
  // const blackPM = new PrintMachine('25px', 'black', 'Tahoma', 'h1')
  // redPM.print('Alert')
  // blackPM.print('(tommorow)')
  // redPM.print('1 may on nose')
  // blackPM.print('not work')
}

{
  // Реализовать класс, описывающий html элемент.
  // Класс HtmlElement должен содержать внутри себя:
  // ■ название тега;
  // ■ самозакрывающийся тег или нет;
  // ■ текстовое содержимое;
  // ■ массив атрибутов;
  // ■ массив стилей;
  // ■ массив вложенных таких же тегов;
  // ■ метод для установки атрибута;
  // ■ метод для установки стиля;
  // ■ метод для добавления вложенного элемента в конец текущего элемента;
  // ■ метод для добавления вложенного элемента в начало текущего элемента;
  // ■ метод getHtml(), который возвращает html код в виде
  //   строки, включая html код вложенных элементов.
  // С помощью написанного класса реализовать следующий блок
  // и добавить его на страницу с помощью document.write().

  class HtmlElement {
    tag: string
    isSingle: boolean
    text: string
    atributes = [] as any[]
    styles = [] as any[]
    elements = [] as HtmlElement[]
    constructor(tag: string, text='') {
      const singleArr = ['area','base','br','col','embed','hr','img','input','keygen','link','meta','param','source','track','wbr']
      this.tag = tag
      this.text = text
      this.isSingle = singleArr.includes(tag) ? true : false
    }
    setAtribute(name:string, value:string) {
      this.atributes.push({name, value})
    }
    setStyle(name:string, value:string) {
      this.styles.push({name, value})
    }
    prepend(el:HtmlElement) {
      this.elements.unshift(el)
    }
    append(el:HtmlElement) {
      this.elements.push(el)
    }
    getHtml():string {
      const styles = this.styles.map(el=>el.name+':'+el.value).join(';')
      const attrCopy = [...this.atributes]
      if (this.styles.length) {
        attrCopy.push({ name: 'style', value: styles })
      }
      if (this.isSingle) {
        if (this.text) {
          attrCopy.push({ name: 'area-label', value: this.text })
        }
        const atributes = attrCopy.map(el=>el.name+'="'+el.value+'"').join(' ')
        return `<${this.tag} ${atributes}>`
      } else {
        const atributes = attrCopy.map(el=>el.name+'="'+el.value+'"').join(' ')
        return `<${this.tag} ${atributes}>${this.text}${this.elements.map(el=>el.getHtml()).join('\n')}</${this.tag}>`
      }
    }
  }
  
  const wrapper = new HtmlElement('div')
  wrapper.setAtribute('id', 'wrapper')
  wrapper.setStyle('display', 'flex')
  const div = new HtmlElement('div')
  div.setStyle('width', '300px')
  div.setStyle('margin', '10px')
  const h3 = new HtmlElement('h3', 'Lorem')
  const img = new HtmlElement('img')
  img.setStyle('width', '100%')
  img.setAtribute('src', '1.gif')
  img.setAtribute('alt', 'Lorem')
  const p = new HtmlElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda inventore voluptas natus obcaecati mollitia ad eos adipisci delectus quia odit, earum culpa sunt, molestiae doloribus in explicabo! Illo, harum!')
  p.setStyle('text-align', 'justify')
  const a = new HtmlElement('a', 'More...')
  a.setAtribute('href', 'https://www.lipsum.com/')
  a.setAtribute('target', '_blank')
  p.append(a)
  div.append(img)
  div.append(p)
  div.prepend(h3)
  wrapper.append(div)
  wrapper.append(div)
  
  const heDiv = document.getElementById('he') as HTMLDivElement
  heDiv.innerHTML = wrapper.getHtml()

}

{
  let now = new Date()
  console.log(now)
  console.log(now.getTime())
  console.log(new Date().toLocaleString())
  

  // '2012-01-26T13:51:50.417-07:00'
  //  Формат строки должен быть следующим: YYYY - MM - DDTHH: mm: ss.sssZ, где:
  //  YYYY - MM - DD – это дата: год - месяц - день.
  //  Символ "T" используется в качестве разделителя.
  //  HH: mm: ss.sss – время: часы, минуты, секунды и миллисекунды.
  //  Необязательная часть 'Z' обозначает часовой пояс в формате + -hh: mm.Если указать просто букву Z, то получим UTC + 0.
  let date = new Date("2024-04-28T00:00:00.000-22:00")
  console.log(Date.parse("2024-04-28T00:00:00.000-22:00"))
  console.log(date.toLocaleString())
  console.log(date.getDay())
  console.log(date.getUTCDay())
  console.log(date.getTimezoneOffset())
  
  // new Date(year, month, date, hours, minutes, seconds, ms)
  date = new Date(2017,0,5)
  console.log(date.toLocaleString())
  console.log(date.getHours())
  console.log(date.getUTCHours())
  
  // getFullYear()
  // Получить год(4 цифры)
  // getMonth()
  // Получить месяц, от 0 до 11.
  // getDate()
  // Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
  // getHours(), getMinutes(), getSeconds(), getMilliseconds()
  // Получить, соответственно, часы, минуты, секунды или миллисекунды.
  // getDay()
  // Вернуть день недели от 0(воскресенье) до 6(суббота).Несмотря на то, что в ряде стран за первый день недели принят понедельник, в JavaScript начало недели приходится на воскресенье.

  // setFullYear(year, [month], [date])
  // setMonth(month, [date])
  // setDate(date)
  // setHours(hour, [min], [sec], [ms])
  // setMinutes(min, [sec], [ms])
  // setSeconds(sec, [ms])
  // setMilliseconds(ms)
  // setTime(milliseconds)

  console.log(date.toLocaleString())
  date.setHours(36)
  date.setSeconds(155)
  console.log(date.toLocaleString())

  console.log((now.getTime() - date.getTime())/(1000*60*60*24))
  
// Дата и время в JavaScript представлены объектом Date.Нельзя создать «только дату» или «только время»: объекты Date всегда содержат и то, и другое.
// Счёт месяцев начинается с нуля(да, январь – это нулевой месяц).
// Дни недели в getDay() также отсчитываются с нуля, что соответствует воскресенью.
// Объект Date самостоятельно корректируется при введении значений, выходящих за рамки допустимых.Это полезно для сложения / вычитания дней / месяцев / недель.
// Даты можно вычитать, и разность возвращается в миллисекундах.Так происходит, потому что при преобразовании в число объект Date становится таймстампом.
// Используйте Date.now() для быстрого получения текущего времени в формате таймстампа.

}

{
  // function sayHi0() {
  //   console.log('Hello')
  // }
  // setTimeout(sayHi0(), 1000)

  function sayHi(phrase:string, who:string) {
    console.log(phrase + ', ' + who)
  }
  const timer = setTimeout(() => sayHi("Привет", "Джон"), 1000)
  clearTimeout(timer)
  
  const timer1 = setInterval(() => console.log('TICK'), 2000)
  setTimeout(()=>{clearInterval(timer1);console.log('boom!!!')}, 5000)

// Методы setInterval(func, delay, ...args) и setTimeout(func, delay, ...args) позволяют выполнять func регулярно или только один раз после задержки delay, заданной в мс.
// Для отмены выполнения необходимо вызвать clearInterval / clearTimeout со значением, которое возвращают методы setInterval / setTimeout.
// Вложенный вызов setTimeout является более гибкой альтернативой setInterval.Также он позволяет более точно задать интервал между выполнениями.
// Планирование с нулевой задержкой setTimeout(func, 0) или, что то же самое, setTimeout(func) используется для вызовов, которые должны быть исполнены как можно скорее, после завершения исполнения текущего кода.
// Браузер ограничивает 4 - мя мс минимальную задержку между пятью и более вложенными вызовами setTimeout, а также для setInterval, начиная с 5 - го вызова.
// Обратим внимание, что все методы планирования не гарантируют точную задержку.

// Например, таймер в браузере может замедляться по многим причинам:

// Перегружен процессор.
// Вкладка браузера в фоновом режиме.
// Работа ноутбука от аккумулятора.
// Всё это может увеличивать минимальный интервал срабатывания таймера(и минимальную задержку) до 300 или даже 1000 мс в зависимости от браузера и настроек производительности ОС.

  function printNumbers(from:number, to:number) {
    let current = from
    let timerId = setInterval(() => {
      console.log(current)
      if (current == to) {
        clearInterval(timerId)
      }
      current++
    }, 1000)
  }

  const dateDiv = document.getElementById('date') as HTMLDivElement
  const dateStopButton = document.getElementById('dateStop') as HTMLButtonElement
  const dateStartButton = document.getElementById('dateStart') as HTMLButtonElement
  
  dateDiv.innerHTML = new Date().toLocaleString()
  let timerId = setInterval(()=>{
    dateDiv.innerHTML = new Date().toLocaleString()
  },1000)

  dateStopButton.addEventListener('click', ()=>{
    clearInterval(timerId)
  })
  dateStartButton.addEventListener('click', ()=>{
    clearInterval(timerId)
    dateDiv.innerHTML = new Date().toLocaleString()
    timerId = setInterval(() => {
      dateDiv.innerHTML = new Date().toLocaleString()
    }, 1000)
  })

}

const addButton = document.getElementById('add') as HTMLButtonElement
const reduceButton = document.getElementById('reduce') as HTMLButtonElement
const numSpan = document.getElementById('num') as HTMLSpanElement

addButton.addEventListener('click',()=>{
  numSpan.innerHTML = (+numSpan.innerHTML +1).toString()
})
reduceButton.addEventListener('click',()=>{
  numSpan.innerHTML = (+numSpan.innerHTML -1).toString()
})

function makeCounter() {
  let count = 0;

  return function () {
    return count++; // есть доступ к внешней переменной "count"
  };
}

let counter0 = makeCounter()
console.log(counter0())
console.log(counter0())
console.log(counter0())
console.log(counter0())
let counter1 = makeCounter()
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(makeCounter()())

let phrase = 'Hello'

{
  function sayHello(name:string) {
    console.log(phrase + ' ' + name)
  }

  sayHello('John')
  phrase = 'Goodbye'
  sayHello('John')
}

{
  function sum(a:number) {
    return function (b: number) {
      return function (c: number) {
        return a + b + c
      }
    }
  }

  const addtoOne = sum(1)
  console.log(addtoOne(2)(4))
  console.log(addtoOne(10)(6))
  console.log(sum(5)(-1)(80))
  console.log(sum)

}

localStorage.mykey = JSON.stringify({somefing:'dfs'})
console.log(JSON.parse(localStorage.mykey).somefing)

class ExtendedDate extends Date {
  print() {
    return this.toLocaleString()
  }
  // @ts-ignore
  toLocaleString() {
    return '*** ' + super.toLocaleString() + ' ***'
  }
}

console.log(new ExtendedDate().print())


class Figure {

}

class Square extends Figure {

}

class Rectangle extends Figure {

}
console.log(new Square() instanceof Square)
console.log(new Square() instanceof Figure)
console.log(new Square() instanceof Object)


const figureArr:Figure[] = [new Square(), new Rectangle()]


class ExtendedArray extends Array {
  // findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number {
      
  // }
  // @ts-ignore
  findIndex(predicate: (value: any, index: number, obj: any[]) => unknown, thisArg?: any): number {
    for (let i=0; i<this.length; i++) {
      if (predicate(this[i], i, this)) return i
      // if (this[i].name=='2') return i
    }
    return -1
  }
}

// @ts-ignore
const myArr = new ExtendedArray({name:'sdfsd1'},{name:'sdfsd2'},{name:'sdfsd3'},{name:'sdfsd4'},{name:'sdfsd'},{name:'sdfsd'},{name:'sdfsd'},{name:'sdfsd'},)
console.log(myArr.findIndex((el: any) => el.name =='2'))
// figureArr.findIndex(el=>el==)

class CoffeeMachine {
  #power:number
  #waterAmount = 0
  #waterLimit = 1000
  constructor(power: number) {
    this.#power = power
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды")
    this.#waterAmount = value
  }
  get waterAmount() {
    return this.#waterAmount
  }
  #checkWater(value:number) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    if (value < 50) throw new Error("Слишком мало воды");
    if (value > this.#waterLimit) throw new Error("Слишком много воды");
  }

  makeCoffe() {
    this.#checkWater(this.#waterAmount)
    this.#waterAmount-=50
    return '☕'
  }
}

// CoffeeMachine.label = ()=>'apple'
// console.log(CoffeeMachine.label())

// создаём новую кофеварку
let coffeeMachine = new CoffeeMachine(100)
coffeeMachine.waterAmount = 1000
console.log(coffeeMachine.waterAmount)
console.log(coffeeMachine.makeCoffe())
console.log(coffeeMachine.makeCoffe())
console.log(coffeeMachine.makeCoffe())
console.log(coffeeMachine.makeCoffe())
console.log(coffeeMachine.waterAmount)

console.log(coffeeMachine instanceof Square)
console.log(coffeeMachine instanceof Figure)
console.log(coffeeMachine instanceof Object)

class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    console.log(this.waterAmount); // Error: can only access from CoffeeMachine
  }
}

const newCM = new MegaCoffeeMachine(200)
console.log(newCM.waterAmount)
newCM.waterAmount = 100
console.log(newCM.waterAmount)


// Всегда удобно, когда детали реализации скрыты, и доступен простой, хорошо документированный внешний интерфейс.
// Для сокрытия внутреннего интерфейса мы используем защищённые или приватные свойства:

// ?Защищённые поля имеют префикс _.Это хорошо известное соглашение, не поддерживаемое на уровне языка.Программисты должны обращаться к полю, начинающемуся с _, только из его класса и классов, унаследованных от него.
// ?Приватные поля имеют префикс #.JavaScript гарантирует, что мы можем получить доступ к таким полям только внутри класса.

class MyObject {
  static #_id = 0
  #id:number
  constructor() {
    this.#id = MyObject.#_id++
  }
  static getCount() {
    return MyObject.#_id
  }
  getId() {
    return this.#id
  }
}

const myObjects = [
  new MyObject(),
  new MyObject(),
  new MyObject(),
  new MyObject(),
  new MyObject(),
]
const myObjects1 = [
  new MyObject(),
  new MyObject(),
  new MyObject(),
  new MyObject(),
  new MyObject(),
]

console.log(myObjects[3].getId())
console.log(MyObject.getCount())

// !!! Задачи с декоратарами
// https://learn.javascript.ru/call-apply-decorators#dekorator-shpion

const obj0 = {1:2}
console.log({_proto_:{},...obj0})


let sayMixin = {
  say(phrase:string) {
    console.log(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, // (или мы можем использовать Object.setPrototypeOf для задания прототипа)

  sayHi() {
    // вызываем метод родителя
    // @ts-ignore
    super.say(`Привет, ${this.name}`); // (*)
  },
  sayBye() {
    // @ts-ignore
    super.say(`Пока, ${this.name}`); // (*)
  }
};

class User {
  name:string
  constructor(name:string) {
    this.name = name;
  }
}

// копируем методы
Object.assign(User.prototype, sayHiMixin);

// теперь User может сказать Привет
// @ts-ignore
console.log(new User("Вася"))

{
  let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  } as Record<string, any>

  let container = document.querySelector('#container ul') as HTMLUListElement
  
  function createTree(container: HTMLUListElement, data: Record<string, any>) {
    for (let key in data) {
      if (Object.keys(data[key]).length) {
        const li = document.createElement('li')
        li.innerHTML = `${key}<ul></ul>`
        container.append(li)
        const ul = li.querySelector('ul') as HTMLUListElement
        createTree(ul, data[key]) 
      } else {
        container.insertAdjacentHTML('beforeend', `<li>${key}</li>`)
      }
    }
  }

  createTree(container, data)
}

type options = {
  top?:number,
  right?: number,
  html?: string,
  class?: string
}

function showNotification(options: options) {
  if (!options.top) options.top = 0
  if (!options.right) options.right = 0
  if (!options.html) options.html = ''
  if (!options.class) options.class = ''
  
  const div = document.createElement('div')

}

showNotification({})

{
  const trs = document.querySelectorAll('#table tbody tr') as NodeListOf<HTMLTableRowElement>
  const trArr = Array.from(trs)
  trArr.sort((a, b) => {
    const aString = a.firstElementChild?.textContent as string
    const bString = b.firstElementChild?.textContent as string
    return aString.localeCompare(bString)
  })
  const tbody = document.querySelector('#table tbody') as HTMLTableSectionElement
  for (let el of trArr) {
    tbody.append(el)
  }
}

{
  const tbody = document.querySelector('#table tbody') as HTMLTableSectionElement
  const thead = document.querySelector('#table thead') as HTMLTableSectionElement
  const tableData = [
    {name: 'Ann', lastName: '1dfsd', age:20},
    {name: '2Ann', lastName: '2dfsd', age:18},
    {name: 'zAnn', lastName: '3dfsd', age:21},
    {name: 'WAnn', lastName: 'd4fsd', age:23},
  ]

  function renderTable(tableData: any[], where: HTMLTableSectionElement ) {
    where.innerHTML = ''
    for (let el of tableData) {
      where.innerHTML += `<tr><td>${el.name}</td><td>${el.lastName}</td><td>${el.age}</td></tr>`
    }
  }

  renderTable(tableData, tbody)

  function sortTable(tableData: any[], where: HTMLTableSectionElement, field:string, order: boolean) {
    tableData.sort((a,b)=>{
      if (['name', 'lastName'].includes(field)) {
        return a[field].localeCompare(b[field])
      } else {
        return a[field]-b[field]
      }
    })
    if (!order) {
      tableData.reverse()
    }
    renderTable(tableData, where)
  }

  thead.addEventListener('click', (e)=>{
    const target = e.target as HTMLElement
    const field = target.dataset.field as string
    if (target.dataset.sort == 'true') {
      sortTable(tableData, tbody, field, true)
      target.dataset.sort = 'false'
    } else {
      sortTable(tableData, tbody, field, false)
      target.dataset.sort = 'true'
    }
  })
}

const scrollButton = document.querySelector('#scroll') as HTMLButtonElement

scrollButton.addEventListener('click', ()=>{
  if (bottomButton.parentElement) bottomButton.parentElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  })
})

// Размеры:

// Ширина / высота видимой части документа(ширина / высота области содержимого): document.documentElement.clientWidth / Height

// Ширина / высота всего документа со всей прокручиваемой областью страницы:
// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );

// Прокрутка:
// Прокрутку окна можно получить так: window.pageYOffset / pageXOffset.

// Изменить текущую прокрутку:
// window.scrollTo(pageX, pageY) – абсолютные координаты,
// window.scrollBy(x, y) – прокрутка относительно текущего места,
// elem.scrollIntoView(top) – прокрутить страницу так, чтобы сделать elem видимым(выровнять относительно верхней / нижней части окна).

// Любая точка на странице имеет координаты:

// Относительно окна браузера – elem.getBoundingClientRect().
// Относительно документа – elem.getBoundingClientRect() плюс текущая прокрутка страницы.
// Координаты в контексте окна подходят для использования с position: fixed, а координаты относительно документа – для использования с position: absolute.

// Каждая из систем координат имеет свои преимущества и недостатки.Иногда будет лучше применить одну, а иногда – другую, как это и происходит с позиционированием в CSS, где мы выбираем между absolute и fixed.

function fName(position: 'bottom'|'top') {

}

const fieldDataElement = document.querySelector('#fieldData') as HTMLDivElement
const fieldElement = document.querySelector('#field') as HTMLDivElement
const fieldStyles = getComputedStyle(fieldElement)
const borderRight = parseFloat(fieldStyles.borderRightWidth)
const borderBottom = parseFloat(fieldStyles.borderBottomWidth)
const borderTop = parseFloat(fieldStyles.borderTopWidth)
const borderLeft = parseFloat(fieldStyles.borderLeftWidth)
document.addEventListener('scroll', ()=>{
  const rect = fieldElement.getBoundingClientRect()
  fieldDataElement.innerHTML = `<p>1. 
  client: (${Math.round(rect.left)}, ${Math.round(rect.top)}), 
  page: (${Math.round(rect.left + window.scrollX)}, ${Math.round(rect.top + window.scrollY)})</p>`
  fieldDataElement.innerHTML += `<p>2. 
  client: (${Math.round(rect.right)}, ${Math.round(rect.bottom)}),
  page:(${Math.round(rect.right + window.scrollX)}, ${Math.round(rect.bottom + window.scrollY)})</p>`
  fieldDataElement.innerHTML += `<p>3. 
  client: (${Math.round(rect.left + borderLeft)}, ${Math.round(rect.top + borderTop)}), 
  page: (${Math.round(rect.left + borderLeft + window.scrollX)}, ${Math.round(rect.top + borderTop + window.scrollY)})</p>`
  fieldDataElement.innerHTML += `<p>4. 
  client: (${Math.round(rect.right - borderRight)}, ${Math.round(rect.bottom - borderBottom)}), 
  page: (${Math.round(rect.right - borderRight + window.scrollX)}, ${Math.round(rect.bottom - borderBottom + window.scrollY)})</p>`
})

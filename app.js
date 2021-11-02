// Функции конструктори

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
	console.log(`Hello ${this.name}`);
  }
}

// Prototype
User.prototype.exit = function() {
	console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User ('Alex', 20);

ivan.exit();


ivan.hello();
alex.hello();


console.log(ivan);
console.log(alex);
// функции для конструирования обєктов и копий


// Контекст визова.This

function showThis(a, b) {
	console.log(this);
  function sum() {
		console.log(this);
		return a + b;
	}

	 console.log(sum());
}
showThis(4, 5);


/*const obj = {
	a:20,
	b:15,
	sum: function() {
		   function shout() {
       console.log(this);
	}
	 shout();
  }
};
obj.sum();*/



/*function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log("Hello!" + this.name);
	};
}
let andru = new User('Andru', 7);*/


/*function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name:'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
	return this*num;
}

const double = count.bind(2);// метод bind
console.log(double(4));
console.log(double(21));*/


// 1) Обичная функция: this = window, но если use strict-undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - єто новий єкземпляр обьекта!!!!!!!!
// 4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    //console.log(this);
		this.style.backgroundColor='yellow';
});


const obj = {
	num:5,
	sayNumber: function() {
		const say = () =>{
   console.log(this);

		};
		say();
	}
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));



// Класси ES6

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}


	 calcArea() {
		 return this.height * this.width;
	 }
}

class ColoredRectangleWithText extends Rectangle {
	constructor (height, width, text, bgColor) {
       super(height, width); // визивает то что било у родителя
			 this.text = text;
			 this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMyProps();
console.log(div.calcArea());

//const square = new Rectangle(10, 10);
//const long = new Rectangle(20, 100);

//console.log(long.calcArea());
//console.log(square.calcArea());



// Rest оператор и параметры по умолчанию (ES6)

const log = function(a, b, ...rest) {
	console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis=2) {
	//basis = basis || 2;
	console.log(number * basis);
}

calcOrDouble(3);




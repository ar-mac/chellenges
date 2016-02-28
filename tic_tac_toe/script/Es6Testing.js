export default class Es6Tester {

  static classMethodTester() {
    console.log(JSON.stringify(this));
  }
  constructor() {
    this.name = 'Es6TesterName'
  }

  testConstObj() {
    const MY_OBJECT = {'one': 1, 'two': 2};

    MY_OBJECT.two = 5;
    MY_OBJECT.three = 6;

    if (MY_OBJECT.three === 6) {
      console.log(MY_OBJECT.three + ' is not 3');
      MY_OBJECT.three = 3;
      console.log(MY_OBJECT.three + ' is fixed, and now is 3');
    } else {
      console.log('lol');
    }
  }

  testConstArr() {
    const MY_ARRAY = ['1','2','3'];

    MY_ARRAY.push('4');
    console.log(MY_ARRAY + 'should include 4');
  }

  testConstScope() {
    const C1 = 'method scope const';
    var c4 = 'method scope var';

    for(let c2 = 0; c2 < 2; c2++) {
      const C3 = 'for loop scope const';
      console.log('c2 in for loop = ' + c2);
      console.log('C3 in for loop = ' + C3);
      console.log('c4 in for loop = ' + c4);
    }

    //console.log('C3 const outside for loop = ' + C3);
    //console.log('c2 outside for loop = ' + c2);
    console.log('c4 outside for loop = ' + c4);

  }

  testThis() {
    console.log(this.name + ' should equal Es6TesterName');

    let myObj = {name: 'objectName','testerName': this.name};
    myObj.testerPropName = this.name;
    console.log(JSON.stringify(myObj));

    if (myObj.testerName === this.name) {
      this.surname = 'Es6TesterSurname';
    }
    console.log(this.surname + ' should equal Es6TesterSurname');
    this.testThisChild()
  }

  testThisChild() {
    console.log(this.surname + ' even in child function should equal Es6TesterSurname');
  }

  testDateTimeFormatting() {
    let formatPL = new Intl.DateTimeFormat('pl-PL');
    let formatted = formatPL.format(new Date("2015-10-21"));
    console.log('formatted date in PL ' + formatted);
  }
}

console.log('Es6Tester loaded');
var es6tester = new Es6Tester;
//es6tester.testConstObj();
//es6tester.testConstArr();
//es6tester.testConstScope();
//es6tester.testThis();
//es6tester.testDateTimeFormatting();
//Es6Tester.classMethodTester();

outside git scope
```
- sudo apt-get install -y nodejs
- npm install jasmine-react-helpers --save-dev
```

## Commands
 
 ### Start server with webpack

```
npm start
```

## Jasmine matchers

.toBe(something) - to check if object is exacly the same
.toEqual(something) - to check object value equality
.toMatch(string) - to check if expectation has within itself given string
.toMatch(regex) - to check if expectation matches with given regex
.toBeDefined()
.toBeUndefined()
.toBeNull()
.toBeTruthy() - to check if expectation casted into boolean is true
.toBeFalsy() - to check if expectation casted into boolean is false
.toContain(value) - to check if array in expectation contain value
.toBeLessThan()
.toBeGreaterThan()
.toBeCloseTo()
.toThrow()
.toThrowError()

fail('Message') - to maually fail specs eg. to check when callback was not called when it shouldnt

## ES6 notes

### Let
let: Creates variable in the scope of nearest block (function, loop, if statement)
var: Creates variable in the scope of nearest function

### Arrow functions
Are not creating their own 'this', but inherit from parent.
return statement is implicitly added at the end

### String methods

`'some string'.includes('str') // true`
`'some '.repeat(2) // 'some some '`
```
let action = 'concatenation'
`String literal ${action} using backticks`
```

### Spread operator

```
let values = [1,2,3]
let moreValues = [0, ...values, 4] // [0,1,2,3,4]

// invocations below have the same result 
someMethod(0, ...values, 4)
someMethod(...moreValues)

function someMethod(a, x, y, z, w) {}

// this works for all iterable objects (like NodeList)

let form = document.querySelector('#my-form'),
   inputs = form.querySelectorAll('input'),
   selects = form.querySelectorAll('select');

let allTheThings = [form, ...inputs, ...selects];
```


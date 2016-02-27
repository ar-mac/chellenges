
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
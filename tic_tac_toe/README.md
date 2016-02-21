
outside git scope
```
- sudo apt-get install -y nodejs
- npm install jasmine-react-helpers --save-dev
```

package.json in tictactoe is copied straight from jasmine-react-helpers so it is probably the reason why `npm test` is not working
I have to check out structure of package.json at zipcall

27.01.16 nothing changed

## Commands to start server with webpack

```
node_modules/webpack-dev-server/bin/webpack-dev-server.js --progress --colors
node_modules/http-server/bin/http-server -p 3000 .


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
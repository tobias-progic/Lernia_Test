# Automatiska tester

Vi ska gå igenom `Mocha` på ett övergripande plan.

Därefter ska vi titta på `Jasmine` för att sen spendera resten av dagen på att inkludera `Jasmine` i era Angularprojekt.


## Enkelt unit test
För att illustrera automatiska tester på lägsta nivån ska vi öva på att bygga egna automatiska tester.

```javascript

function add(x,y) {
    return x + y;
}

function test(actual, expected) {
    if (actual !== expected) {
        console.log('FAIL:' + actual + " is not " + expected);
    } else {
        console.log('PASS')
    }
}

test(add(2,2), 4);

```

## Övning
Se till att alla nedanstående tester passerar genom att fixa problemen i `add`

```javascript
test(add(2,2), 4);
test(add("2","2"), undefined);
test(add({}, 2, 0), undefined);
test(add([2], 2), undefined);
test(add(-1, 2), 1);
test(add(null, 2), undefined);
test(add("", 2), undefined);
```


## Mocha
Mocha är ett testramverk som gör det enkelt att skriva strukturerade testsviter

```javascript

describe('my group of test cases', function() {

    //setup...
    
    it('has a test case', function() {
        expect(someVariable).toBe(someValue);s
    });

    it('has another test case', function() {

    });

});

```

Setup och upprensning
```javascript

describe('my group of test cases', function() {
    
    before(function() {
        //Pre-amble / setup for all test cases
    });

    beforeEach(function() {
        //Pre-amble / setup before each test case is run
    });

    after(function() {
        
    });

    afterEach(function() {

    })
    
    //...

});

```


### Beståndsdelar
* Mocha (testramverk)
* Chai ("assertion library")
* Sinon (spies, stubs och mocks)

### Demo

## Jasmine
Jasmine har stora likheter med Mocha, dessutom är det AngularJS de-facto-testramverk.


* Karma (test runner)
* PhantomJS (headless browser)

Demo1 - Yeoman generated
Demo2 - Directive based


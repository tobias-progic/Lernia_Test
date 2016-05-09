Programfel
-------------

```javascript

var 1one = 42;

var o = {
    prop = 42
};

function test() {
    //... do something
}
Test();
```



### Runtime-fel
Att t.ex. försöka använda en egenskap (property) som inte finns gör att programmet kraschar.

Ex
```javascript

var o = {
    prop1: 42
};
o.prop2.prop22 = 42;    //Cannot set property 'prop22' of undefined

```

#### Type coercion
```javascript
var x = "";

if (x) {
    console.log(x); 
}

``` 

Ett annat exempel är då ett värde av en typ tolkas som en annorlunda typ
```javascript
var x = "2";    //sträng

if (x == 2) {
    console.log('x är lika med två');
    var y = x + 2;
    console.log(y);     //--> "22"!!
}

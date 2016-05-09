# Övningar


## 1. Lös problemet med underegenskapen
```javascript
var user = {
    name: 'user'
}

console.log(user.address.street);
```




## 2. Hitta felet med try - catch

```javascript

var user = {
    name: 'user'
};

function addStreet(v) {
    v.address.street = "Streetroad 1";
    console.log(v);
}

addStreet(user);

```


## 3. `throw` om inparametern inte är en sträng
```javascript

function f(v) {
    //throw om v inte är en sträng
}


```

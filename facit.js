//FACIT

//Addera numeriska värden, undefined för alla andra
function add(x,y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        return undefined;
    }
        
}


function test(actual, expected) {
    if (actual !== expected) {
        console.log('FAIL:' + actual + " is not " + expected);
    } else {
        console.log('PASS')
    }
}

test(add(2,2), 4);
test(add("2","2"), undefined);
test(add({}, 2, 0), undefined);
test(add([2], 2), undefined);
test(add(-1, 2), 1);
test(add(null, 2), undefined);
test(add("", 2), undefined);

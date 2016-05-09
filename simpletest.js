//Simpelt unit test: kolla så att värdet som returneras är rätt samt att felaktiga värden inte accepteras

//Addera numeriska värden, undefined för alla andra
function add(x,y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
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



// --- mock example ---

var globalDate;

function getDateFromServer() {

    asyncFunction(function(data) {
        globalDate = data;
    })

}

var asyncFunction = function(callback) {
    callback(new Date())
}

var mockedAsyncFunction = function(callback) {
    callback(42)
};

asyncFunction = mockedAsyncFunction;    // Replace (mock) asyncFunction with mockedAsyncFunction


getDateFromServer();    // Will end up calling the mocked function instead of the original

test(globalDate, 42);
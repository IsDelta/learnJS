var cycle1 = function () {
        for (var i = 2; i <= 10; i++) {
            if (i % 2 == 0) {
                alert(i)
            }
        }
    },
    cycle2 = function () {
        var i = 0;
        while (i < 3) {
            alert("номер" + i + "!")
            i++;
        }
    },
    cycle3 = function () {
        var num = 0;
        while (num < 100) {
            num = prompt('Input num > 100', '')
            if (num == null) break;
        }
    },
    cycle4 = function () {
        for (var i = 2; i < 10; i++) {
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    break
                }
                alert(i);
                break;
            }
        }
    }
// END OF CYCLES TASKS
var switch1 = function () {
        var browser = 'IE';
        if (browser == 'IE') {
            alert('О, да у вас IE!');
        } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
            alert('Да, и эти браузеры мы поддерживаем');
        } else alert('Мы надеемся, что и в вашем браузере все ок!');
    },
    switch2 = function () {
        switch (+prompt('a?', '')) {
            case 0:
                alert(0);
                break;
            case 1:
                alert(1);
                break;
            case 2:
            case 3:
                alert('2,3');
                break;
            default:
                break;
        }
    }
// END OF SWITCH TASKS
var checkAge = function (age) {
        return (age > 18) ? true : confirm('Родители разрешили?');

    },
    checkAge = function (age) {
        return (age > 18) || confirm('Родители разрешили?');

    },
    min = function (a, b) {
        return a > b ? b : a;
    }

function pow(x, n) {
    if (n < 0 || n != ~~n || (x == n && x == 0)) return NaN;

    if (n == 0) return 1;
    var a = x;
    while (n > 1) {
        x *= a;
        n--;
    }
    return x;
};
// END OF FUNCTION TASKS
function sumTo(n) {
    var rez = 0;
    for (var i = 1; i <= n; i++) {
        rez += i;
    }
    return rez;
}

function sumTo2(n) {
    for (var i = 1; 1 < n; i++) {
        return n + sumTo2(n - 1);
    }
    return n;
}

function sumTo3(n) {
    return n * (n + 1) / 2
}

function factorial(n) {
    for (var i = 1; i < n; i++) {
        return n * factorial(n - 1);
    }
    return n;
}

function fib(n) {
    var a = 1,
        b = 0,
        c = 0;
    for (var i = 1; i < n; i++) {
        b = c;
        c = a;
        a = a + b;
    }
    return a;
}
// END OF RECURSION TASKS
function sum() {
    var a = +prompt('First number', ''),
        b = +prompt('Second number', '');
    return +(a + b).toFixed(6);
}

function getDecimal(a) {
    a = Math.abs(a);
    return (a * 10e5 - Math.floor(a) * 10e5) / 10e5
}

function fibBinet(n) {
    return Math.pow((1 + Math.sqrt(5)) / 2, n) / Math.sqrt(5);
}

function rand(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
// END OF NUMBER TASKS
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    var strToLow = str.toLowerCase();
    return ~strToLow.indexOf('viagra') != 0 || ~strToLow.indexOf('xxx') != 0

}

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength - 3) + '...'
    }
    return str;
}

function extractCurrencyValue(str) {

}
// END OF STRING TASKS
function objects() {
    var user = {};
    user.name = "Vasya";
    user.surname = "Petrov";
    user.name = "Sergey";
    delete user.name;
    return user;
}

function isEmpty(obj) {
    var counter = 0
    for (key in obj) {
        counter++
    }
    return !counter;
}

function sumInObj(obj) {
    var sum = 0;
    for (key in obj) {
        sum += obj[key];
    }
    return sum;
}

function maxSalary(obj) {
    var maxValue = 0,
        maxValueName = "No workers";
    for (key in obj) {
        if (obj[key] > maxValue) {
            maxValue = obj[key];
            maxValueName = key;
        }
    }
    return maxValueName;
}

function multiplyNumeric(obj) {
    for (key in obj) {
        if (isNumeric(obj[key])) obj[key] *= 2;
    }
    return obj;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
}
// END OF OBJECT TASKS
function lastArrayElemet(arr) {
    return arr[arr.length - 1];
}

function addTextInArray(arr) {
    arr.push('Computer')
}

function arrayTask() {
    var styles = ['Jazz', 'Blues'];
    styles.push('Rock\'n\'Roll');
    styles[styles.length - 2] = 'Classic';
    alert(styles.shift());
    styles.unshift('Rap', 'Ragge');
    return (styles);
}

function randomArrayElement(arr) {
    return arr[rand(0, arr.length - 1)];

    function rand(min, max) {
        return min + Math.floor(Math.random() * (max + 1 - min));
    }
}

function sumOfArrayElements() {
    var arr = [],
        i = 0,
        temp
    rez = 0;
    while (true) {
        if ((temp = prompt('Input number', '')) != null) {
            arr[i] = +temp;
            i++
        } else break;
    }
    for (i = 0; i < arr.length; i++) {
        rez += arr[i];
    }
    return rez;
}

function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1;
}

function filterRange(arr, a, b) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function addClass(obj, cls) {
    var arr = obj.className.split(' ');
    if (arr.indexOf(cls) === -1) {
        arr.push(cls);
        obj.className = arr.join(' ');
    }
    return obj.className;
}
// Missed tasks
function randomSort(arr) {
    function compare(a, b) {
        return Math.random() - 0.5;
    }
    return arr.sort(compare)
}

function sortAge(arr) {
    function compare(a, b) {
        return a.age - b.age;
    }
    return arr.sort(compare);
}

function printList(list) {
    tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

function aclean(arr) {
    var tempArr = [];
    var indexArr = [];
    for (var i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i].toLowerCase().split('').sort().join('');
    }
    for (var i = 0; i < tempArr.length; i++) {
        var index = tempArr.indexOf(tempArr[i])
        if (indexArr.indexOf(index) == -1) {
            indexArr.push(index)
        }

    }
    tempArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (indexArr.indexOf(i) != -1) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

function unique(arr) {
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = 1;
    }
    return Object.keys(obj);
}
// END OF ARRAY TASKS
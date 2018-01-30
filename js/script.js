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
    min = function(a,b) {
       return a > b ? b : a;
    }
    pow = function(x,n) {
        var a = x;
        while(n != 1){
            x*=a;
            n--;
        }
        return x;
    }
// END OF FUNCTION TASKS
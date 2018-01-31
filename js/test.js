describe("pow(возведение в степень)", function () {

    it("возводит 2 в 4 степень", function () {
        assert.equal(pow(2, 4), 16);
    });
    it("возводит 4 в степень 3", function () {
        assert.equal(pow(4, 3), 64);
    });

    describe('возведение x в степень n', function () {

        function makeTest(x) {
            var expected = x * x * x;
            it(x + ' в 3 степени = ' + expected, function () {
                assert.equal(pow(x, 3), expected);
            })

        }
        for (var i = 1; i <= 5; i++) {
            makeTest(i);
        }
    });
    describe('Проверка на NaN', function () {
        it('возводит в отрицательную степень', function () {
            assert(isNaN(pow(2, -1)), 'pow(2, -1) не NaN');
        })
        it('возводит в дробную степень', function () {
            assert(isNaN(pow(2, 1.5)), 'pow(2, 1.5) не NaN');
        })
    });
    describe('Возведение в 0', function () {
        it('возведение 3 в 0 ', function () {
            assert.equal(pow(3, 0), 1)
        })
        it('возведение 0 в 0 ', function () {
            assert(isNaN(pow(0, 0)))
        })
    });

});
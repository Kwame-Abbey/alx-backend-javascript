const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Sum', function() {
    it('returns sum of two positive integers', function() {
        assert.equal(calculateNumber('SUM', 1, 3), 4);
    });

    it('returns sum of an integer and a decimal', function() {
        assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('returns sum of two decimals', function() {
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('returns sum with rounding of 1.5 and 3.7', function() {
        assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('returns sum of negative numbers', function() {
        assert.equal(calculateNumber('SUM', -1, -3), -4);
    });

    it('returns sum of a positive and a negative number', function() {
        assert.equal(calculateNumber('SUM', 1, -3), -2);
    });

    it('returns sum with rounding of a negative decimal', function() {
        assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
    });

    it('returns sum with rounding of a positive and negative decimal', function() {
        assert.equal(calculateNumber('SUM', 1.5, -3.7), -2);
    });

    it('returns sum when both numbers are zero', function() {
        assert.equal(calculateNumber('SUM', 0, 0), 0);
    });

    it('returns sum when one number is zero', function() {
        assert.equal(calculateNumber('SUM', 0, 4.5), 5);
    });

    it('returns sum with large numbers', function() {
        assert.equal(calculateNumber('SUM', 1000.4, 2000.5), 3001);
    });

    it('returns sum with very small numbers', function() {
        assert.equal(calculateNumber('SUM', 0.1, 0.2), 0);
    });
});

describe('Subtract', function() {
    it('returns difference of two positive integers', function() {
        assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('returns difference of an integer and a decimal', function() {
        assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('returns difference of two decimals', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('returns difference with rounding of 1.5 and 3.7', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });

    it('returns difference of negative numbers', function() {
        assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
    });

    it('returns difference of a positive and a negative number', function() {
        assert.equal(calculateNumber('SUBTRACT', 1, -3), 4);
    });

    it('returns difference with rounding of a negative decimal', function() {
        assert.equal(calculateNumber('SUBTRACT', -1.2, -3.7), 3);
    });

    it('returns difference with rounding of a positive and negative decimal', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.5, -3.7), 6);
    });

    it('returns difference when both numbers are zero', function() {
        assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });

    it('returns difference when one number is zero', function() {
        assert.equal(calculateNumber('SUBTRACT', 0, 4.5), -5);
    });

    it('returns difference with large numbers', function() {
        assert.equal(calculateNumber('SUBTRACT', 1000.4, 2000.5), -1001);
    });

    it('returns difference with very small numbers', function() {
        assert.equal(calculateNumber('SUBTRACT', 0.1, 0.2), 0);
    });
});

describe('Divide', function() {
    it('returns quotient of two positive integers', function() {
        assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
    });

    it('returns quotient of an integer and a decimal', function() {
        assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('returns quotient of two decimals', function() {
        assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });

    it('returns quotient with rounding of 1.5 and 3.7', function() {
        assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });

    it('returns quotient of negative numbers', function() {
        assert.equal(calculateNumber('DIVIDE', -3, -1), 3);
    });

    it('returns quotient of a positive and a negative number', function() {
        assert.equal(calculateNumber('DIVIDE', 3, -1), -3);
    });

    it('returns quotient with rounding of a negative decimal', function() {
        assert.equal(calculateNumber('DIVIDE', -1.2, -3.7), 0.25);
    });

    it('returns quotient with rounding of a positive and negative decimal', function() {
        assert.equal(calculateNumber('DIVIDE', 1.5, -3.7), -0.5);
    });

    it('returns quotient when both numbers are zero', function() {
        assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    });

    it('returns quotient when one number is zero', function() {
        assert.equal(calculateNumber('DIVIDE', 0, 4.5), 0);
    });

    it('returns quotient with large numbers', function() {
        assert.equal(calculateNumber('DIVIDE', 1000.4, 2000.3), 0.5);
    });

    it('returns quotient with very small numbers', function() {
        assert.equal(calculateNumber('DIVIDE', 0.1, 0.2), 'Error');
    });

    it('returns Error when b is zero', function() {
        assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
    });
});

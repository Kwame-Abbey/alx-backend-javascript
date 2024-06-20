const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Sum', function() {
    it('returns sum of two positive integers', function() {
        assert.equal(calculateNumber(1, 3), 4);
    });

    it('returns sum of an integer and a decimal', function() {
        assert.equal(calculateNumber(1, 3.7), 5);
    });

    it('returns sum of two decimals', function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('returns sum with rounding of 1.5 and 3.7', function() {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });

    it('returns sum of negative numbers', function() {
        assert.equal(calculateNumber(-1, -3), -4);
    });

    it('returns sum of a positive and a negative number', function() {
        assert.equal(calculateNumber(1, -3), -2);
    });

    it('returns sum with rounding of a negative decimal', function() {
        assert.equal(calculateNumber(-1.2, -3.7), -5);
    });

    it('returns sum with rounding of a positive and negative decimal', function() {
        assert.equal(calculateNumber(1.5, -3.7), -2);
    });

    it('returns sum when both numbers are zero', function() {
        assert.equal(calculateNumber(0, 0), 0);
    });

    it('returns sum when one number is zero', function() {
        assert.equal(calculateNumber(0, 4.5), 5);
    });

    it('returns sum with large numbers', function() {
        assert.equal(calculateNumber(1000.4, 2000.5), 3001);
    });

    it('returns sum with very small numbers', function() {
        assert.equal(calculateNumber(0.1, 0.2), 0);
    });
});

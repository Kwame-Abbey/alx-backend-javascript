const calculateNumber = require('2-calcul_chai');
const expect = require('chai').expect

describe('Sum', function() {
    it('returns sum of two positive integers', function() {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('returns sum of an integer and a decimal', function() {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('returns sum of two decimals', function() {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('returns sum with rounding of 1.5 and 3.7', function() {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('returns sum of negative numbers', function() {
        expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });

    it('returns sum of a positive and a negative number', function() {
        expect(calculateNumber('SUM', 1, -3)).to.equal(-2);
    });

    it('returns sum with rounding of a negative decimal', function() {
        expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    });

    it('returns sum with rounding of a positive and negative decimal', function() {
        expect(calculateNumber('SUM', 1.5, -3.7)).to.equal(-2);
    });

    it('returns sum when both numbers are zero', function() {
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('returns sum when one number is zero', function() {
        expect(calculateNumber('SUM', 0, 4.5)).to.equal(5);
    });

    it('returns sum with large numbers', function() {
        expect(calculateNumber('SUM', 1000.4, 2000.5)).to.equal(3001);
    });

    it('returns sum with very small numbers', function() {
        expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
    });
});

describe('Subtract', function() {
    it('returns difference of two positive integers', function() {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('returns difference of an integer and a decimal', function() {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('returns difference of two decimals', function() {
        expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('returns difference with rounding of 1.5 and 3.7', function() {
        expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });

    it('returns difference of negative numbers', function() {
        expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    });

    it('returns difference of a positive and a negative number', function() {
        expect(calculateNumber('SUBTRACT', 1, -3)).to.equal(4);
    });

    it('returns difference with rounding of a negative decimal', function() {
        expect(calculateNumber('SUBTRACT', -1.2, -3.7)).to.equal(3);
    });

    it('returns difference with rounding of a positive and negative decimal', function() {
        expect(calculateNumber('SUBTRACT', 1.5, -3.7)).to.equal(6);
    });

    it('returns difference when both numbers are zero', function() {
        expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('returns difference when one number is zero', function() {
        expect(calculateNumber('SUBTRACT', 0, 4.5)).to.equal(-5);
    });

    it('returns difference with large numbers', function() {
        expect(calculateNumber('SUBTRACT', 1000.4, 2000.5)).to.equal(-1001);
    });

    it('returns difference with very small numbers', function() {
        expect(calculateNumber('SUBTRACT', 0.1, 0.2)).to.equal(0);
    });
});

describe('Divide', function() {
    it('returns quotient of two positive integers', function() {
        expect(calculateNumber('DIVIDE', 3, 1)).to.equal( 3);
    });

    it('returns quotient of an integer and a decimal', function() {
        expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal( 0.25);
    });

    it('returns quotient of two decimals', function() {
        expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal( 0.25);
    });

    it('returns quotient with rounding of 1.5 and 3.7', function() {
        expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal( 0.5);
    });

    it('returns quotient of negative numbers', function() {
        expect(calculateNumber('DIVIDE', -3, -1)).to.equal( 3);
    });

    it('returns quotient of a positive and a negative number', function() {
        expect(calculateNumber('DIVIDE', 3, -1)).to.equal( -3);
    });

    it('returns quotient with rounding of a negative decimal', function() {
        expect(calculateNumber('DIVIDE', -1.2, -3.7)).to.equal( 0.25);
    });

    it('returns quotient with rounding of a positive and negative decimal', function() {
        expect(calculateNumber('DIVIDE', 1.5, -3.7)).to.equal( -0.5);
    });

    it('returns quotient when both numbers are zero', function() {
        expect(calculateNumber('DIVIDE', 0, 0)).to.equal( 'Error');
    });

    it('returns quotient when one number is zero', function() {
        expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal( 0);
    });

    it('returns quotient with large numbers', function() {
        expect(calculateNumber('DIVIDE', 1000.4, 2000.3)).to.equal( 0.5);
    });

    it('returns quotient with very small numbers', function() {
        expect(calculateNumber('DIVIDE', 0.1, 0.2)).to.equal( 'Error');
    });

    it('returns Error when b is zero', function() {
        expect(calculateNumber('DIVIDE', 3, 0.)).to.equal( 'Error');
    });
});

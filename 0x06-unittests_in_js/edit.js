describe('Subtract', function() {
    it('returns quotient of two positive integers', function() {
        assert.equal(calculateNumber('DIVIDE', 1, 3), -2);
    });

    it('returns quotient of an integer and a decimal', function() {
        assert.equal(calculateNumber('DIVIDE', 1, 3.7), -3);
    });

    it('returns quotient of two decimals', function() {
        assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), -3);
    });

    it('returns quotient with rounding of 1.5 and 3.7', function() {
        assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), -2);
    });

    it('returns quotient of negative numbers', function() {
        assert.equal(calculateNumber('DIVIDE', -1, -3), 2);
    });

    it('returns quotient of a positive and a negative number', function() {
        assert.equal(calculateNumber('DIVIDE', 1, -3), 4);
    });

    it('returns quotient with rounding of a negative decimal', function() {
        assert.equal(calculateNumber('DIVIDE', -1.2, -3.7), 3);
    });

    it('returns quotient with rounding of a positive and negative decimal', function() {
        assert.equal(calculateNumber('DIVIDE', 1.5, -3.7), 6);
    });

    it('returns quotient when both numbers are zero', function() {
        assert.equal(calculateNumber('DIVIDE', 0, 0), 0);
    });

    it('returns quotient when one number is zero', function() {
        assert.equal(calculateNumber('DIVIDE', 0, 4.5), -5);
    });

    it('returns quotient with large numbers', function() {
        assert.equal(calculateNumber('DIVIDE', 1000.4, 2000.5), -1001);
    });

    it('returns quotient with very small numbers', function() {
        assert.equal(calculateNumber('DIVIDE', 0.1, 0.2), 0);
    });
});

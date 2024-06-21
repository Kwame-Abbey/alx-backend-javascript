// 5-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log "The total is: 120" and call console.log once when called with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('should log "The total is: 20" and call console.log once when called with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
});

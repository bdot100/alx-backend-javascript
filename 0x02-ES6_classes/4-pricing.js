import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    // amount getter
    get amount() {
        return this._amount;
    }

    // amount setter
    set amount(amount) {
        if (typeof amount === 'number') {
            this._amount = amount;
        } else {
            throw new TypeError('Type of amount must be a number!');
        }
    }

    // currency getter
    get currency() {
        return this._currency;
    }

    // set currency
    set currency(currency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError('Currency must be an instance of the class Currency');
        } else {
            this._currency = currency;
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount === 'number' && typeof conversionRate === 'number') {
            return amount * conversionRate;
        } else {
            throw new TypeError('Input type must be number!');
        }
    }
}
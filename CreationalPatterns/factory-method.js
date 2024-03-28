// Abstract class called PaymentMethod
class PaymentMethod {
    constructor() {
        if (this.constructor === PaymentMethod) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }
    connectToGateway() {
        throw new Error("This method must be overwritten!");
    }
    pay(amount) {
        throw new Error("This method must be overwritten!");
    }
}

// Concrete class called CreditCard
class CreditCard extends PaymentMethod {
    #gateway;
    constructor(cardNumber, cardHolder, expiryDate) {
        super();
        this.#gateway = this.connectToGateway(cardNumber, cardHolder, expiryDate);
    }
    connectToGateway(cardNumber, cardHolder, expiryDate) {
        console.log('Connecting to payment gateway...');
    }
    pay(amount) {
        console.log(`Paying $${amount} using Credit Card`);
    }
}

// Concrete class called PayPal
class PayPal extends PaymentMethod {
    #gateway;
    constructor(email, password) {
        super();
        this.#gateway = this.connectToGateway(email, password);
    }
    connectToGateway(email, password) {
        console.log('Connecting to payment gateway...');
    }
    pay(amount) {
        console.log(`Paying $${amount} using PayPal`);
    }
}

// Concrete class called BitPay
class BitPay extends PaymentMethod {
    #gateway;
    constructor(email, password) {
        super();
        this.#gateway = this.connectToGateway(email, password);
    }
    connectToGateway(email, password) {
        console.log('Connecting to payment gateway...');
    }
    pay(amount) {
        console.log(`Paying $${amount} using BitPay`);
    }
}

// Abstract factory method to create payment methods
class PaymentMethodFactory {
    constructor() {
        if (this.constructor === PaymentMethodFactory) {
            throw new Error("Cannot instantiate abstract class!");
        }
    }
    createPaymentMethod() {
        throw new Error("This method must be overwritten!");
    }
}

// Concrete factory method to create CreditCard payment methods
class CreditCardPaymentMethodFactory extends PaymentMethodFactory {
    #cardNumber;
    #cardHolder;
    #expiryDate;
    constructor(cardNumber, cardHolder, expiryDate) {
        super();
        this.#cardNumber = cardNumber;
        this.#cardHolder = cardHolder;
        this.#expiryDate = expiryDate;
    }
    createPaymentMethod() {
        return new CreditCard(this.#cardNumber, this.#cardHolder, this.#expiryDate);
    }
}

// Concrete factory method to create PayPal payment methods
class PayPalPaymentMethodFactory extends PaymentMethodFactory {
    #email;
    #password;
    constructor(email, password) {
        super();
        this.#email = email;
        this.#password = password;
    }
    createPaymentMethod() {
        return new PayPal(this.#email, this.#password);
    }
}

// Concrete factory method to create BitPay payment methods
class BitPayPaymentMethodFactory extends PaymentMethodFactory {
    #email;
    #password;
    constructor(email, password) {
        super();
        this.#email = email;
        this.#password = password;
    }
    createPaymentMethod() {
        return new BitPay(this.#email, this.#password);
    }
}


// Class that will use the factory method to create payment methods
class PaymentProcessor {
    #paymentMethodFactory;
    #paymentMethod;
    constructor(paymentMethodFactory) {
        this.#paymentMethodFactory = paymentMethodFactory;
    }
    processPayment(amount) {
        this.#paymentMethod = this.#paymentMethodFactory.createPaymentMethod();
        this.#paymentMethod.pay(amount);
    }
}

// Usage
const creditCardPaymentMethodFactory = new CreditCardPaymentMethodFactory('123123', 'John Doe', '12/23');
const paymentProcessor = new PaymentProcessor(creditCardPaymentMethodFactory);
paymentProcessor.processPayment(100);
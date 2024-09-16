function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject("Both inputs must be numbers.");
        }

        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject("Division by zero is not allowed.");
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject(`Error: Invalid operation '${operation}'`);
        }
    });
}




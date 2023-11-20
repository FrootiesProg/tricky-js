function createAccount(pin, amount) {
    let currentBalance = amount;
    let currentPin = pin;

    return {
        checkBalance(inputPin) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            return `Current balance: $${currentBalance}.`;
        },
        deposit(inputPin, depositAmount) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            currentBalance += depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance: $${currentBalance}.`;
        },
        withdraw(inputPin, withdrawAmount) {
            if (inputPin !== currentPin) {
                return "Invalid PIN.";
            }
            if (withdrawAmount > currentBalance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            currentBalance -= withdrawAmount;
            return `Successfully withdrew $${withdrawAmount}. Current balance: $${currentBalance}.`;
        },
        changePin(oldPin, newPin) {
            if (oldPin !== currentPin) {
                return "Invalid PIN.";
            }
            currentPin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };

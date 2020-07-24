const defaultResult = 0
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}


function createAndWriteOutput(operator, resultBeforeCal, calcNumber) {
    const calcDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        opertion: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);

}


const btn = document.querySelectorAll('.btn');

btn.forEach(function (item) {
    item.addEventListener('click', function () {
        if (item.classList.contains("add")) {
            const enteredNumber = getUserInput();
            const initialResult = currentResult;
            currentResult += enteredNumber;
            createAndWriteOutput("+", initialResult, enteredNumber)
            writeToLog('ADD', initialResult, enteredNumber, currentResult)
        }
        if (item.classList.contains("sub")) {
            const enteredNumber = getUserInput();
            const initialResult = currentResult;
            currentResult -= enteredNumber;
            createAndWriteOutput("-", initialResult, enteredNumber)
            writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
        }
        if (item.classList.contains("mult")) {
            const enteredNumber = getUserInput();
            const initialResult = currentResult;
            currentResult *= enteredNumber;
            createAndWriteOutput("*", initialResult, enteredNumber)
            writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
        }
        if (item.classList.contains("division")) {
            const enteredNumber = getUserInput();
            const initialResult = currentResult;
            currentResult /= enteredNumber;
            createAndWriteOutput("/", initialResult, enteredNumber)
            writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
        }


    })
})


const defaultResult = 0
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}


function createAndWriteOutput(operator, resultBeforeCal, calcNumber) {
    const calcDescription = `${resultBeforeCal} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}


const btn = document.querySelectorAll('.btn');

btn.forEach(function (item) {
    item.addEventListener('click', function () {
        if (item.classList.contains("add")) {
            const enteredNumber = getUserInput();
            const initialResult = currentResult;
            currentResult += enteredNumber;
            createAndWriteOutput("+", initialResult, enteredNumber)
        }
        if (item.classList.contains("sub")) {
            const enteredNumber = getUserInput();
            const initialResult = currentResult;
            currentResult -= enteredNumber;
            createAndWriteOutput("-", initialResult, enteredNumber)
        }
        if (item.classList.contains("mult")) {
            const enteredNumber = getUserInput();
            const initialResult = currentResult;
            currentResult *= enteredNumber;
            createAndWriteOutput("*", initialResult, enteredNumber)
        }
        if (item.classList.contains("division")) {
            const enteredNumber = getUserInput();
            const initialResult = currentResult;
            currentResult /= enteredNumber;
            createAndWriteOutput("/", initialResult, enteredNumber)
        }


    })
})


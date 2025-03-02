let outputScreen = document.getElementById("output-screen");

function clearScreen() {
    outputScreen.value = "0";
}

function deleteLast() {
    if (outputScreen.value.length > 1) {
        outputScreen.value = outputScreen.value.slice(0, -1);
    } else {
        outputScreen.value = "0";
    }
}

function appendCharacter(character) {
    if (outputScreen.value === "0") {
        outputScreen.value = character;
    } else {
        outputScreen.value += character;
    }
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (error) {
        outputScreen.value = "Error";
    }
}

function autoCalculate() {
    try {
        if (outputScreen.value) {
            outputScreen.value = eval(outputScreen.value);
        }
    } catch (error) {
        outputScreen.value = "Error";
    }
}

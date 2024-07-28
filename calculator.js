let result = '';

function calculate(input) {
    result = result + input;
    document.getElementById("result").value = result;
}

function resulting() {
    try {
        // Handle sin and cos evaluation
        result = result.replace(/sin\((.*?)\)/g, function(match, p1) {
            return Math.sin(eval(p1));
        });

        result = result.replace(/cos\((.*?)\)/g, function(match, p1) {
            return Math.cos(eval(p1));
        });

        result = eval(result);
    } catch (err) {
        window.alert("Invalid entry");
        result = '';
        document.getElementById("result").value = result;
    }

    document.getElementById("result").value = result;
}

function clearing() {
    result = '';
    document.getElementById("result").value = result;
}

function deletething() {
    result = result.slice(0, -1);
    document.getElementById("result").value = result;
}

function dothings() {
    document.getElementById("result").value = 'clear';
}

function donthings() {
    document.getElementById("result").value = result;
}
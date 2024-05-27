function generateFibonacciSeries() {
    var input = document.getElementById("numberInput").value;
    var outputDiv = document.getElementById("output");

    var number = parseInt(input);
    if (isNaN(number)) {
        outputDiv.textContent = "Error: Por favor, ingrese un número válido.";
        return;
    }

    var fibonacciSeries = [];
    for (var i = 0; i < number; i++) {
        if (i === 0) {
            fibonacciSeries.push(0);
        } else if (i === 1) {
            fibonacciSeries.push(1);
        } else {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
        }
    }

    outputDiv.textContent = "Serie de Fibonacci: " + fibonacciSeries.join(", ");
}

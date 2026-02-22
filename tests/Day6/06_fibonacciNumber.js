function fibonacci(number) {
    if (number <= 0) return 0; 
    if (number === 1) return 1; let a = 0; let b = 1; let temp;
    for (let i = 2; i <= number; i++) { temp = a + b; a = b; b = temp; } return b;
}
console.log(fibonacci(10));
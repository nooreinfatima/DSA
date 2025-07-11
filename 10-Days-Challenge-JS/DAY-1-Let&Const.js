function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const r = parseFloat(readLine());

    const area = PI * r * r;
    const perimeter = 2 * PI * r;

    console.log(area);
    console.log(perimeter);
}
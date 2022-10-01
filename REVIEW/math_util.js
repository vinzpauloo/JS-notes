export const PI = 3.14159;

export function hypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

export function randomNumberGenerator() {
  return Math.floor(Math.random() * 6 + 1);
}

export function toCelsius(temp) {
  return (temp - 32) * 0.5556;
}

export function toFahrenheit(temp) {
  return temp * 1.8 + 32;
}

// calculator.test.js
import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './calculator';

describe('Calculator functions', () => {

    it('should add two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-2, -3)).toBe(-5);
    });

    it('should subtract two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(3, 5)).toBe(-2);
    });

    it('should multiply two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
    });

    it('should divide two numbers', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-6, 3)).toBe(-2);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
    });
    // Tests for the vulnerable eval function
    it('should demonstrate the vulnerability of eval', () => {
        // Simulate an attack using eval
        const maliciousCode = `(() => { return "Hacked!"; })()`;
        const result = divide(2,maliciousCode);
        expect(result).toBe('Hacked!');
    });
});

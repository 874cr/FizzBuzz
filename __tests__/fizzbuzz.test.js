import fizzbuzz from '../src/fizzbuzz.js';
import { jest } from '@jest/globals';

test("FizzBuzz should log correct output for n=15", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    fizzbuzz(15);

    const expectedOutput = [
        1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz",
        11, "Fizz", 13, 14, "FizzBuzz"
    ];

    const actualCallsCount = consoleSpy.mock.calls.length;
    const expectedCallsCount = expectedOutput.length;

    if (actualCallsCount !== expectedCallsCount) {
        consoleSpy.mockRestore();
        throw new Error(`Expected ${expectedCallsCount} console.log calls, but got ${actualCallsCount}. Make sure your loop runs from 1 to ${expectedCallsCount} and calls console.log for each number.`);
    }

    expectedOutput.forEach((expected, index) => {
        const actualCall = consoleSpy.mock.calls[index];
        if (!actualCall || actualCall.length === 0) {
            consoleSpy.mockRestore();
            throw new Error(`No console.log call found at position ${index + 1}. Expected: ${expected}`);
        }
        expect(actualCall[0]).toBe(expected);
    });

    consoleSpy.mockRestore();
});


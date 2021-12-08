import { capitalize } from "../Functions"

describe("Test capitalize function", () => {
    test.each([
        ["bulbasaur", "Bulbasaur"],
        ["squirtle", "Squirtle"],
        ["overgrow", "Overgrow"],
        ["chlorophyll", "Chlorophyll"],
    ])("Does %s become %s", (text, expectedResult) => {
        expect(capitalize(text)).toBe(expectedResult);
    });
});
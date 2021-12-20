import { capitalize, checkName } from "../Functions"

describe("Test capitalize function", () => {
    test.each([
        ["bulbasaur", "Bulbasaur"],
        ["squirtle", "Squirtle"],
        ["overgrow", "Overgrow"],
        ["chlorophyll", "Chlorophyll"],
        ["compound-eyes", "Compound Eyes "]
    ])("Does %s become %s", (text, expectedResult) => {
        expect(capitalize(text)).toBe(expectedResult);
    });
});

describe("Integration tests 1-3, that makes sure checkName calls capitalize", () => {
    test.each([
        ["bulbasaur", "Bulbasaur"],
        ["nidoran-f", "Nidoran♀"],
        ["nidoran-m", "Nidoran♂"],
    ])("Does %s become %s", (name, expectedResult) => {
        expect(checkName(name)).toBe(expectedResult);
    });
});
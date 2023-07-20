import { classNames } from "./classNames";

describe("classNames", () => {
    test("with one param", () => {
        expect(classNames("class")).toBe("class");
    });

    test("with two string classes", () => {
        expect(classNames("class", "class-2")).toBe("class class-2");
    });

    test("with two string classes and one null argument", () => {
        expect(classNames("class", null, "class-2")).toBe("class class-2");
    });

    test("with string class and valid mod", () => {
        expect(classNames("class", { "class-2": true })).toBe("class class-2");
    });

    test("with tho string classes and valid mod", () => {
        expect(classNames("class", { "class-2": true }, "class-3")).toBe("class class-2 class-3");
    });

    test("with tho string classes and mod with key='undefined'", () => {
        expect(classNames("class", { undefined: true }, "class-2")).toBe("class class-2");
    });
});

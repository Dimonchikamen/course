type Mods = Record<string, boolean|string|null|undefined>
type Argument = string|Mods;

export function classNames(...args: Argument[]): string {
    const result: string[] = [];
    args.forEach(arg => {
        if (!Boolean(arg)) {
            return;
        }
        if (typeof arg === "object") {
            result.push(...Object.entries(arg)
                .filter(([cls, value]) =>
                    Boolean(cls) &&
                    cls !== "undefined" &&
                    cls !== "null" &&
                    Boolean(value)
                )
                .map(([cls, value]) => cls))
        } else {
            result.push(arg);
        }
    });
    return result.join(" ");
}
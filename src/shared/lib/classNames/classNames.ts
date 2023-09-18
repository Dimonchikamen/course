type Mods = Record<string, boolean | string | null | undefined>;
type Argument = string | Mods | undefined;

export function classNames(...args: Argument[]): string {
    const result: string[] = [];
    args.forEach(arg => {
        if (!arg) {
            return;
        }
        if (typeof arg === "object") {
            result.push(
                ...Object.entries(arg)
                    .filter(([cls, value]) => Boolean(cls) && cls !== "undefined" && cls !== "null" && Boolean(value))
                    // eslint-disable-next-line
                    .map(([cls, value]) => cls)
            );
        } else {
            result.push(arg);
        }
    });
    return result.join(" ");
}

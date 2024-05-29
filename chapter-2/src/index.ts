console.log("Hello, TypeScript!")

let a = 1 + 2
let b = a + "a"
let c = {
    apple: a,
    banana: b
}
let d = c.apple * 4

let numbers = {
    *[Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n
        }
    }
}

type WarnUser = {
    (warning: string): void
    wasCalled: boolean
}

type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
}

function call <T extends unknown[], R> (
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}
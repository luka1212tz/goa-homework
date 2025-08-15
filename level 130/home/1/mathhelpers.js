export function square(num) {
    return num * num;
}

export function double(num) {
    return num * 2;
}

export default function magicMath(num) {
    return (num * num) * 2; // square then double
}

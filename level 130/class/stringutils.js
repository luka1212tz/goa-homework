export function toUpper(str) {
    return str.toUpperCase();
}


export function toLower(str) {
    return str.toLowerCase();
}


export default function formatAll(str) {
    console.log(toUpper(str));
    console.log(toLower(str));
}

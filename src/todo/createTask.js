import uniqid from 'uniqid';

export function createTask(text, checked) {
    return {
        key: uniqid(),
        value: text,
        checked
    }
}
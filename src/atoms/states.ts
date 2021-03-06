import { atom } from "recoil";

export type Todo= {
    id: string
    title: string
    text: string
    isComplete: boolean
}

// Todoリストを保持
const todoListState = atom<Todo[]>({
    key: 'todoListState',
    default: [],
});

export { todoListState }
import { ID } from '@datorama/akita'

export interface Todo {
  id: ID
  title: string
  detail: string
}

export function createTodo(params: Partial<Todo>) {
  return {
    title: '',
    detail: '',
    ...params,
  } as Todo
}

import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private storageKey = 'todos';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      const sampleTodos: Todo[] = [
        { description: 'Buy groceries', dueDate: '2025-08-20', isCompleted: false },
        { description: 'Pay electricity bill', dueDate: '2025-08-18', isCompleted: true },
        { description: 'Finish Angular project', dueDate: '2025-08-22', isCompleted: false }
      ];
      localStorage.setItem(this.storageKey, JSON.stringify(sampleTodos));
    }
  }

  getTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addTodo(todo: Todo) {
    const todos = this.getTodos();
    todos.push(todo);
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: Todo = { description: '', dueDate: '', isCompleted: false };

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTodo.description && this.newTodo.dueDate) {
      this.todoService.addTodo({ ...this.newTodo });
      this.todos = this.todoService.getTodos();
      this.newTodo = { description: '', dueDate: '', isCompleted: false };
    }
  }

  updateTodoStatus(todo: Todo) {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  
  isDueSoon(dueDate: string): boolean {
    const today = new Date();
    const due = new Date(dueDate);
    const diff = (due.getTime() - today.getTime()) / (1000 * 3600 * 24);
    return diff <= 2 && diff >= 0 && !isNaN(diff); // due in 2 days or less
  }
}

import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome';
import { TodoListComponent } from './pages/todo-list/todo-list';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'todo', component: TodoListComponent },
  { path: '**', redirectTo: '' }
];
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Workbench } from './pages/workbench/workbench';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'workbench', component: Workbench },
  { path: '**', redirectTo: '' }
];

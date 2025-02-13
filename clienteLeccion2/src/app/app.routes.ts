import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlatosComponent } from './pages/platos/platos.component';

export const routes: Routes = [
    { path: 'home', component:  HomeComponent},
    { path: 'platos', component:  PlatosComponent}
];

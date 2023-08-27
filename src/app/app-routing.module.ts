import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterMealsComponent } from './components/filter-meals/filter-meals.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutMealsComponent } from './components/about-meals/about-meals.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', canActivate: [authGuard],component: MenuComponent },
  { path: 'meals/:category', component: FilterMealsComponent },
  { path: 'about/:about', component: AboutMealsComponent },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

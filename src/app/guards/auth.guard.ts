import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = new Router();
  return token ? true : router.navigate(['/login']);
};

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SeguridadService } from './seguridad.service';

@Injectable()
export class AutenticacionGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivateChild(): boolean {
    return this.seguridadService.estaAutenticado()
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.seguridadService.estaAutenticado();
  }
  constructor(private seguridadService:SeguridadService){}

  canLoad(route: Route): boolean {
    return this.seguridadService.estaAutenticado();
  }
}

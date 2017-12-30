import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { SeguridadService } from './auth/seguridad.service'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

	constructor(private injector: Injector){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = localStorage.getItem("accessToken")
        const clon = req.clone({ headers: req.headers.append("Authorization", `Bearer ${token}`)})

        let auth = this.injector.get(SeguridadService);

        return next.handle(clon)
        			.do(event => {
        				if(event instanceof HttpResponse) {
        					console.log(event)
        				}
        			})
        			.catch((res) => {
        				if(res.status == 401) {
        					return auth.getNewToken(localStorage.getItem("refreshToken"))
        					.flatMap((data: any) => {
        						if(data.accessToken != "") {
        							localStorage.setItem("accessToken", data.accessToken)
        						}else {
        							localStorage.removeItem("accessToken")
        							return Observable.throw(res)
        						}
        						let clonadaRepetida = req.clone({ headers: req.headers.append("Authorization", `Bearer ${data.accessToken}`)})
        					})
        				}

        			})
    }
}


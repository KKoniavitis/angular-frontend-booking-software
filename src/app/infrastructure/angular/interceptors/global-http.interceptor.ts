import { HttpContextToken, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";

import { Observable, switchMap, take } from "rxjs";

import { AuthInteractor } from "@app/auth/usecases/auth-interactor.service";
import { environmentVars } from "@app/environment-data/usecases/environment-data-interactor.service";

export const BYPASS_RESPONSE_TYPE = new HttpContextToken(() => "json");
export const BYPASS_BASE_URI = new HttpContextToken(() => environmentVars.APP_UI_API_BASE_URI as string);

export const globalHttpInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  return inject(AuthInteractor)
    .getAccessToken()
    .pipe(
      take(1),
      switchMap((token) => {
        const clonedRequest = req.clone({
          url: `${req.context.get<string>(BYPASS_BASE_URI)}${req.url}`,
          // @ts-ignore
          responseType: req.context.get<string>(BYPASS_RESPONSE_TYPE),
          headers: req.headers.set("Authorization", `Bearer ${token}`) /*,
         withCredentials: true*/
        });

        return next(clonedRequest);
      })
    );

  /*const token = "";

  const clonedRequest = req.clone({
    url: `${req.context.get<string>(BYPASS_BASE_URI)}${req.url}`,
    // @ts-ignore
    responseType: req.context.get<string>(BYPASS_RESPONSE_TYPE),
    headers: req.headers.set("Authorization", `Bearer ${token}`) /!*,
    withCredentials: true*!/
  });

  return next(clonedRequest);*/
};

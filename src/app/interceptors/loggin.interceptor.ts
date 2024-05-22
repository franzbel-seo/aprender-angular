import { HttpInterceptorFn } from '@angular/common/http';


export const logginInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('logginInterceptor: ', req)
  return next(req);
};


import {HttpInterceptorFn, HttpResponse} from "@angular/common/http";
import {delay, of} from "rxjs";

export const fakeBannerInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === "/api/banner") {
    return of(
      new HttpResponse({
        body: {text: "ASYC"},
        status: 200,
      }),
    ).pipe(delay(3000));
  }

  return next(req);
};

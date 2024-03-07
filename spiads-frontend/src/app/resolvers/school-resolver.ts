import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { SchoolService } from '../school/school.service';
import { inject } from '@angular/core';

export const schoolResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> => {
  const schoolService = inject(SchoolService);
  const router = inject(Router);

  switch (state.url) {
    default:
      return schoolService.getSchoolUrl(state.url).pipe(
        tap((response) => {
          if (response !== state.url.replace('/', '')) throw new Error();
        }),
        catchError((error) => {
          router.navigate(['/error']);
          return of('No data');
        })
      );
  }
};

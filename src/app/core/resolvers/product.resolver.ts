import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { IProduct, ProductsService } from '../services/products.service';
import { catchError, map, Observable } from 'rxjs';

export const productResolver: ResolveFn<Observable<IProduct | boolean>> = (route, state) => {
  const router = inject(Router);
  return inject(ProductsService).getProduct(route.params['id']).pipe(
    map(res => res.data),
    catchError(err => router.navigate(['not-found']))
  );
};

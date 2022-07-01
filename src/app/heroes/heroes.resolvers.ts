import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Hero } from './heroes.service';

@Injectable({ providedIn: 'root' })
export class ApiPostListResolver1 implements Resolve<Hero[]> {
  constructor(protected httpClient: HttpClient) {}

  resolve(): any {
    return this.httpClient.get('/api/heroes/1');
  }
}

@Injectable({ providedIn: 'root' })
export class ApiPostListResolver2 implements Resolve<Hero[]> {
  constructor(protected httpClient: HttpClient) {}

  resolve(): any {
    return this.httpClient.get('/api/heroes/2');
  }
}

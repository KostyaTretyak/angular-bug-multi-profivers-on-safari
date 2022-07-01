import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from './heroes.service';

@Component({
  template: `
  <hr>
  <ul>
    <li>hero1: {{ hero1.name }}</li>
    <li>hero2: {{ hero2.name }}</li>
  </ul>
  `,
})
export class HeroesComponent implements OnInit {
  hero1: Hero;
  hero2: Hero;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.hero1 = this.activatedRoute.snapshot.data.hero1[0] as Hero;
    this.hero2 = this.activatedRoute.snapshot.data.hero2[0] as Hero;
  }
}

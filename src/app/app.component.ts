import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>Here an example of resolving multi data providers</p>

  <p>If you click "go to heroes" on Safari 15.5 and see only one hero, you ses the issue with multi providers.</p>

  <ul>
    <li><a routerLink="/">home</a></li>
    <li><a routerLink="/heroes">go to heroes</a></li>
  </ul>
  
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {}

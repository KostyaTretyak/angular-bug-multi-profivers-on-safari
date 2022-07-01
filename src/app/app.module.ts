import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ApiMockModule } from '@ng-stack/api-mock';

import { AppComponent } from './app.component';
import { HeroesService } from './heroes/heroes.service';
import { AppRoutingModule } from './app-routing.module';

const apiMockModule = ApiMockModule.forRoot(HeroesService, { delay: 0 });

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, apiMockModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

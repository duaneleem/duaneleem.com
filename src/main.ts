// import { bootstrap } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic }     from '@angular/platform-browser-dynamic';
import { AppModule }                  from './app/app.module';
import { enableProdMode }             from '@angular/core';
import { AppComponent, environment }  from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EyeGameDescComponent } from './eye-game-desc/eye-game-desc.component';
import { EyeGameListComponent } from './eye-game-list/eye-game-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EccentricCirclesComponent } from './eccentric-circles/eccentric-circles.component';

@NgModule({
  declarations: [
    AppComponent,
    EyeGameDescComponent,
    EyeGameListComponent,
    NavbarComponent,
    EccentricCirclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: "eye-games", component: EyeGameListComponent
      },
      {
        path: "eccentric-circles", component: EccentricCirclesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { gameBorderCard } from "./directive/game-border-card.directive";
import { newsBorderCard } from "./directive/news-border-card.directive";


import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameListComponent } from './game/game-list/game-list.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { GameCreateComponent } from './game/game-create/game-create.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GenreColorPipe } from './pipes/genre-color.pipe';
import { PlateformColorPipe } from './pipes/plateform-color.pipe';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameDetailComponent,
    NavbarComponent,
    GameListComponent,
    NewsListComponent,
    gameBorderCard,
    newsBorderCard,
    GameCreateComponent,
    GenreColorPipe,
    PlateformColorPipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: AuthService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

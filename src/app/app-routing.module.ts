import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameCreateComponent } from './game/game-create/game-create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'add', component: GameCreateComponent },
  { path: 'games', component: GameComponent },
  { path: 'games/:id', component: GameDetailComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

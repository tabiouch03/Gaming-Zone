import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameCreateComponent } from './game/game-create/game-create.component';


const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'add', component: GameCreateComponent },
  { path: 'games', component: GameComponent },
  { path: 'games/:id', component: GameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

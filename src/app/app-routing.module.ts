import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstChallengeComponent } from './first-challenge/first-challenge.component';
import { SecondChallengeComponent } from './second-challenge/second-challenge.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"firstChallenge", component:FirstChallengeComponent},
  {path:"secondChallenge", component:SecondChallengeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

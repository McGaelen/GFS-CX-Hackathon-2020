import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';
import { PollsComponent } from './polls/polls.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'trivia',
    component: TriviaComponent,
  },
  {
    path: 'polls',
    component: PollsComponent
  },
  {
    path: 'challenges',
    component: ChallengesComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TriviaComponent,
    PollsComponent,
    ChallengesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

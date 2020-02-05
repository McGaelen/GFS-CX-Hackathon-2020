import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';
import { PollsComponent } from './polls/polls.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatIconRegistry} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

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
    FooterComponent,
    TriviaComponent,
    PollsComponent,
    ChallengesComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private registry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.registry.addSvgIcon('challenge-icon', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon-challenge.svg'));
  }
}

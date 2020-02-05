import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  trivia: any;
  answered = false;
  correct = false;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('trivia').valueChanges().pipe(switchMap(collection => collection)).subscribe(val => {
      this.trivia = val;
      console.log(this.trivia);
    });
  }

  answerTrivia(answer) {
    this.answered = true;
    this.correct = this.getCorrectChoice().choiceName === answer;
  }

  getCorrectChoice() {
    return this.trivia.choices.find(val => val.correct);
  }

}

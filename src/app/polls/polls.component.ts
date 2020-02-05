import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  poll: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('polls').valueChanges().pipe(switchMap(collection => collection)).subscribe(val => {
      this.poll = val;
      console.log(this.poll);
    });
  }

  answerPoll(answer) {

  }

}

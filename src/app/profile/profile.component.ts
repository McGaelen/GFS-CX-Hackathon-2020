import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(private db: AngularFirestore, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(switchMap(params =>
      this.db.collection('profiles').doc(params.get('id')).valueChanges()))
    .subscribe(profile => {
      this.profile = profile;
      console.log(this.profile);
    });
  }

}

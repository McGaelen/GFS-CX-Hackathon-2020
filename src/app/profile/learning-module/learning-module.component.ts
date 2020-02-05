import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-learning-module',
  templateUrl: './learning-module.component.html',
  styleUrls: ['./learning-module.component.css']
})
export class LearningModuleComponent implements OnInit {

  @Input() title;
  @Input() selected;

  constructor() { }

  ngOnInit() {
  }

}

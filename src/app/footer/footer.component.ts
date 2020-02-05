import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userId = 'susie123';
  activeTab = 'trivia';

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  changeActiveTab(tab) {
    this.activeTab = tab;
    this.changeDetectorRef.detectChanges();
  }

}

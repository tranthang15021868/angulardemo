import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit, AfterViewInit {
  pageTitle = 'demo title';
  @Input() inputTitle = '';
   isClickTitle = false;

  constructor() {
  }

  ngOnInit() {
    console.log(this.inputTitle);
  }

  onClickBack() {
    this.pageTitle = 'gggggggggggg';
  }

  ngAfterViewInit(): void {

  }

  clickTitle() {
    this.isClickTitle = !this.isClickTitle;
  }
}

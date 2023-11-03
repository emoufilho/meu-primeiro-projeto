import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }

  @Input() public title: string = "hello world";

  ngOnInit(): void { }
  ngOnChanges(): void { }
  ngOnDestroy(): void { 
    alert("app title destruido");
  }

}

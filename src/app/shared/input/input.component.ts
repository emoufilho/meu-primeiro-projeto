import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  @Input() public contador: number = 0;

  constructor() { }

  ngOnInit(): void { 

    setTimeout(() => {
      console.log(this.contador);
    }, 3000);
    
  }

  ngOnChanges() {
      console.log(this.contador);
  }

}

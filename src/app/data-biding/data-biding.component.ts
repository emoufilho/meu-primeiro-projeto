import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})

export class DataBidingComponent implements OnInit {

  public nome: string = 'Eduardo';
  public idade: number = 31;
  public imgSrc: string = 'https://picsum.photos/200/300';
  public nomeDoCurso: string = 'Angular';


  public checkedDisabled: boolean = false;
  public imgTitle: string = 'Propety Binding Title';
  public imgAlt: string = 'Propety Binding Alt';

  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() { }

  ngOnInit(): void { }

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTest(valor: MouseEvent){
    //console.log(valor);
    //this.position = {x: valor.offsetX, y: valor.offsetY}; //também funciona
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
    
  }

}

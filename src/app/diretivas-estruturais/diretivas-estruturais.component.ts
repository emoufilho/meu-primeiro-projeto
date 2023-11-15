import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = false;
  public conditionClick: boolean = true;

  public listaPessoas: Array<{ nome: string, idade: number }> = [
    {nome: "João", idade: 18}, 
    {nome: "Maria", idade: 20}
  ];

  public nome: string = "eduardo";

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      this.condition = !this.condition;
    } , 1000);
  
  }

  public onClick(){
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddPessoa(){
    this.listaPessoas.push({nome: "Pedro", idade: 30});
  }

  public onClickEventList(event: number){
    this.listaPessoas.splice(event, 1);
  }

}

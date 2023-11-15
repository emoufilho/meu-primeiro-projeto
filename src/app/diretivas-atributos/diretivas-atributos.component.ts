import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = false;
  public heightPX: string = "100px";
  public backgroundColor: string = "blue";
  public nome: string = "";
  public msgErro: string = "";

  public list: Array<{nome: string}> = [];

  public date: Date = new Date();

  
  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      //ngClass
      this.valor = !this.valor;
      
      //ngStyle
      if(this.heightPX == "100px"){
        this.heightPX = "200px";
        this.backgroundColor = "red";
      }else{
        this.heightPX = "100px";
        this.backgroundColor = "blue";
      }

    } , 1000);

  }

  public salvar(){
    if(this.nome != ""){
      this.msgErro = "";
      this.list.push({ nome: this.nome});
      this.nome = "";
    }else{
      this.msgErro = "Campo obrigatório";
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--
  <app-diretivas-atributos>
    <h1>Aulas de Diretivas de Atributo - ng-content </h1>
    <h3>Final da Aula - ng-content </h3>
  </app-diretivas-atributos>
  <router-outlet></router-outlet>
  <app-diretivas-atributos></app-diretivas-atributos>
  <app-new-component></app-new-component>
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Adicionar</button>-->
  <ng-template [ngIf]="getDados">
    <h1>Nome: {{getDados.nome}}</h1>
    <h1>Idade: {{getDados.idade}}</h1>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <router-outlet></router-outlet>
  `
})

export class AppComponent implements OnInit {

  public addValue: number = 1;

  public getDados: {nome: string, idade: number} | undefined;

  constructor() { }

  ngOnInit(): void { }

  public add() {
    this.addValue++;
  } 

  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event;
    console.log(event)
  }

}

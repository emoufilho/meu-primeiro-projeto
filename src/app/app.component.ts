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
  -->
  <app-diretivas-atributos></app-diretivas-atributos>`
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}

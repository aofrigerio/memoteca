import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    conteudo : "pensamento",
    autoria : "alan",
    modelo : 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

  resetar (){
    this.pensamento = {
      conteudo : "",
      autoria : "",
      modelo : 0,
    };
  }

}

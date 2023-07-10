import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { maisculoValidator } from '../maiusculoValidator';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
      private service: PensamentoService,
      private router: Router,
      private formBuilder: FormBuilder
      ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
                                Validators.required,
                                Validators.pattern(/(.|\s)*\S(.|\s)*/)
                                ])
                                      ],
      autoria: ['', Validators.compose([ 
                    Validators.required, 
                    Validators.minLength(3),
                    maisculoValidator
                    ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    console.log(this.formulario)
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(["/listarPensamento"])
      })
    }    
  }

  resetar (){
    this.router.navigate(["/listarPensamento"])
  }

  habilitarBotao(): string {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado'
  }

}

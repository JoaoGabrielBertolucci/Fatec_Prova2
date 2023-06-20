import { Component } from '@angular/core';
import { empresa } from '../empresa';
import { ServiceempresasService } from '../serviceempresas.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadempresas',
  templateUrl: './cadempresas.component.html',
  styleUrls: ['./cadempresas.component.css']
})
export class CadempresasComponent {

  empresas : empresa[] = [];
  formGroupEmpresa : FormGroup;

  constructor(private ServiceempresasService: ServiceempresasService,
              private formBuilder : FormBuilder
              ){
    this.formGroupEmpresa = formBuilder.group({
      id : [''],
      nome_Empresa : [''],
      cnpj : [''],
      cep : [''],
      email : ['']
    });
  }

  ngOnInit(): void {
    throw new Error('Metodo não foi implementado, ta tudo certo?');
  }

  cadEmpresaS(){
    this.ServiceempresasService.cadastroEmpresa(this.formGroupEmpresa.value).subscribe(
      {
        next : data => {
          this.empresas.push(data);
          this.formGroupEmpresa.reset();
        }
      }
    );
  }


}
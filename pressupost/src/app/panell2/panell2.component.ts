import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CalcularServeiService } from './../services/calcular-servei.service';


@Component({
  selector: 'app-panell2',
  templateUrl: './panell2.component.html',
  styleUrls: ['./panell2.component.css']
})
export class Panell2Component implements OnInit {

  panellForm: FormGroup = this.fb.group({
    pagines:[0, [Validators.required, Validators.min(1)]],
    idiomes:[0, [Validators.required, Validators.min(1)]]
  });

  @Output() serveisWeb = new EventEmitter<number>();

  paginesIntroduides:number=0;
  idiomesIntroduits:number=0;
  costServeiWeb:number=0;


  constructor(private fb: FormBuilder, private calcularServei:CalcularServeiService) { }

  ngOnInit(): void {
  }

  campEsValid( camp: string){
    return this.panellForm.controls[camp].errors;
  }

  obtenirInfo(){
    this.costServeiWeb=0;
    this.paginesIntroduides=this.panellForm.controls['pagines'].value;
    this.idiomesIntroduits=this.panellForm.controls['idiomes'].value;
    if(this.paginesIntroduides>0 && this.idiomesIntroduits>0){
      this.costServeiWeb=500+this.calcularServei.afegirServeisWeb(this.paginesIntroduides, this.idiomesIntroduits);
    }
  }

  passarServeiWebAHome(){
    this.obtenirInfo();
    this.serveisWeb.emit(this.costServeiWeb);
  }

  modificarPagines(numero:number){
    this.paginesIntroduides=this.panellForm.controls['pagines'].value;
    this.paginesIntroduides=this.paginesIntroduides+numero;
    this.panellForm.controls['pagines'].setValue(this.paginesIntroduides);
    
  }

  modificarIdiomes(numero:number){
    this.idiomesIntroduits=this.panellForm.controls['idiomes'].value;
    this.idiomesIntroduits=this.idiomesIntroduits+numero;
    this.panellForm.controls['idiomes'].setValue(this.idiomesIntroduits);
  }


}


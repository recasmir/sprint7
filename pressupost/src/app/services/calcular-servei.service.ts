import { Injectable, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CalcularServeiService {

  // serveisWeb:number=0;
 
  constructor() { }


  afegirServeisWeb(pagines:number, idiomes:number):number{

    return (pagines*idiomes*30);
    
  }
}

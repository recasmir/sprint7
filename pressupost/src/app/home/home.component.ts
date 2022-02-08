
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  pressupostForm: FormGroup = this.fb.group({
    web:[false],
    seo:[false],
    ads:[false]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

webService:boolean=false;

cost: number[]=[0,0,0];
total: number=0;
totalWeb:number=0;

@Input() costServeiWeb:number=0;

calcular(valor:number, tipusServei:string, i:number){
 
  if(this.pressupostForm.controls[tipusServei].value){
    this.cost[i]=valor;
  }else{
  this.cost[i]=0;
  }

  if(this.pressupostForm.controls['web'].value){
    this.webService=true;
  }else{
    this.webService=false;
    this.totalWeb=0;
  }

this.total=this.totalWeb+this.cost[1]+this.cost[2];

}

recalcularTotal(e:number){
    
  if(this.pressupostForm.controls['web'].value){
    this.total=this.cost[1]+this.cost[2];
    this.totalWeb=e;
    this.total=this.total+this.totalWeb;
  }else{
    this.totalWeb=0;
  }
  
}

}


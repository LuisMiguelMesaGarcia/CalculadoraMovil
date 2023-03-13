import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display = 0;
  memory:any[]=[];
  operator='';
  operand=0;

  constructor() {}

  numbers(n:any){
    this.memory.push(n);
    this.display=Number(this.memory.join(''))
  }

  dot(d:string){
    if(this.memory.length === 0){

    }else if (!this.memory.includes('.')){
      this.memory.push(d);
      this.display=Number(this.memory.join(''))
    } 
  }
  
  operation(op:string){
    this.operand = this.display;
    this.memory = [];
    this.display=Number(this.memory.join(''))
    this.operator= op;
  }

  equals(){
    if(this.operator === '+'){
      this.display += this.operand;
      this.operand=0;
      this.memory=[];
    }else if (this.operator === '-'){
      this.display = this.operand - this.display;
      this.operand=0;
      this.memory=[];
    }else if (this.operator === 'x'){
      this.display *= this.operand;
      this.operand=0;
      this.memory=[];
    }else if (this.operator === '/'){
      this.display = this.operand / this.display;
      this.operand=0;
      this.memory=[];
    }else if (this.operator === '%'){
      this.display = this.display * this.operand / 100;
      this.operand=0;
      this.memory=[];
    }
  }

  clear(){
    this.display=0;
    this.memory=[];
  }
  back(){
    this.memory.pop()
    this.display=Number(this.memory.join(''))
  }

}

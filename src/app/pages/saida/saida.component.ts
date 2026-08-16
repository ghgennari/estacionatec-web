import { Component } from '@angular/core';
@Component({ selector: 'app-saida', standalone: false, templateUrl: './saida.component.html' })
export class SaidaComponent { search=''; confirmed=''; vehicles=[['ABC-1234','Maria Silva','08:30'],['XYZ-5678','Carlos Santos','07:15'],['DEF-9012','Ana Paula','09:45']]; get filtered(){return this.vehicles.filter(v=>v.join(' ').toLowerCase().includes(this.search.toLowerCase()));} exit(plate:string):void{this.confirmed=plate;this.vehicles=this.vehicles.filter(v=>v[0]!==plate);} }

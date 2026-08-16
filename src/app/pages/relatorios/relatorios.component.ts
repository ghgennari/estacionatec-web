import { Component } from '@angular/core';
@Component({selector:'app-relatorios',standalone:false,templateUrl:'./relatorios.component.html'})
export class RelatoriosComponent { start='2026-08-01'; end='2026-08-16'; type='Movimentações'; message=''; generate(){this.message=`Relatório de ${this.type.toLowerCase()} preparado para o período selecionado.`;} }

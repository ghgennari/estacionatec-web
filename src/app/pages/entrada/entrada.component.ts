import { Component } from '@angular/core';
@Component({ selector: 'app-entrada', standalone: false, templateUrl: './entrada.component.html' })
export class EntradaComponent {
  plate = '';
  person = '';
  type = 'Aluno';
  observation = '';
  saved = false;
  submit(): void {
    if (this.plate && this.person) {
      this.saved = true;
      setTimeout(() => (this.saved = false), 3000);
    }
  }
}

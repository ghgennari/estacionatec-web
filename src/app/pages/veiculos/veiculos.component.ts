import { Component } from '@angular/core';
@Component({
  selector: 'app-veiculos',
  standalone: false,
  templateUrl: './veiculos.component.html',
})
export class VeiculosComponent {
  search = '';
  modal = false;
  form = { plate: '', model: '', color: '', owner: '', type: 'Carro' };
  vehicles = [
    {
      plate: 'ABC-1234',
      model: 'Honda Civic',
      color: 'Prata',
      owner: 'Maria Silva',
      type: 'Carro',
    },
    {
      plate: 'XYZ-5678',
      model: 'Toyota Corolla',
      color: 'Preto',
      owner: 'Carlos Santos',
      type: 'Carro',
    },
    {
      plate: 'DEF-9012',
      model: 'Honda CG 160',
      color: 'Vermelha',
      owner: 'Ana Paula',
      type: 'Moto',
    },
  ];
  get filtered() {
    return this.vehicles.filter((v) =>
      Object.values(v).join(' ').toLowerCase().includes(this.search.toLowerCase()),
    );
  }
  save() {
    if (this.form.plate && this.form.owner) {
      this.vehicles = [...this.vehicles, { ...this.form }];
      this.modal = false;
      this.form = { plate: '', model: '', color: '', owner: '', type: 'Carro' };
    }
  }
}

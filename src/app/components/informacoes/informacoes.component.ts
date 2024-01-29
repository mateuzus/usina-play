import { Component } from '@angular/core';
import { personData } from 'src/models/person';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss'],
})
export class InformacoesComponent {
  constructor() {}

  person = personData
}

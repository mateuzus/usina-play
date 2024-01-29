import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.scss']
})
export class ExerciciosComponent {
  @Input() image: any;
  @Input() title: string = '';
  @Input() keepTraining: boolean = false;
  @Input() isPersonalTraining: boolean = false;


}

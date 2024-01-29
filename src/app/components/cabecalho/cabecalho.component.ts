import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {


  navigateMyBody(){
    console.log('Navegar para my body')
  }

  navigateAchievment(){
    console.log('Navegar para achievment');
    
  }
}

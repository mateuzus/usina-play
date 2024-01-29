import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  declarations: [
    NotificacoesComponent,
    InformacoesComponent,
    CabecalhoComponent,
    ExerciciosComponent,
    ContentsComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    NotificacoesComponent,
    InformacoesComponent,
    CabecalhoComponent,
    ExerciciosComponent,
    ContentsComponent,
  ],
})
export class ComponentsModule {}

import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  swiperModules = [IonicSlides];

  personalTrainerList = [
    {
      image: '../assets/image/levantamento-peso.jpg',
      title: 'Levantamento de Peso',
      trainingStarted: true,
      isPersonalTraining: true,
    },
    {
      image: '../assets/image/yoga.jpg',
      title: 'Yoga Express',
      trainingStarted: false,
      isPersonalTraining: true,
    },
    {
      image: '../assets/image/emagrecimento.jpg',
      title: 'Perda de peso',
      trainingStarted: false,
      isPersonalTraining: true,
    },
    {
      image: '../assets/image/boxe.jpg',
      title: 'Boxe',
      trainingStarted: false,
      isPersonalTraining: true,
    },
  ];

  programsList = [
    {
      image: '../assets/image/levantamento-peso.jpg',
      title: 'Levantamento de Peso',
      trainingStarted: true,
      isPersonalTraining: false,
    },
    {
      image: '../assets/image/yoga.jpg',
      title: 'Yoga Express',
      trainingStarted: false,
      isPersonalTraining: false,
    },
    {
      image: '../assets/image/emagrecimento.jpg',
      title: 'Perda de peso',
      trainingStarted: false,
      isPersonalTraining: false,
    },
    {
      image: '../assets/image/boxe.jpg',
      title: 'Boxe',
      trainingStarted: false,
      isPersonalTraining: false,
    },
  ];

  contentList = [];

  constructor() {
  }

}

import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css'],
    standalone: true,
    imports: [NgFor, RouterLink, NgClass]
})
export class SideBarComponent implements OnInit{
  //test!:string; //TODO: con exclamación se permite declarar una variable sin inicializar

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }
  customOptions: Array<any> = [];

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ];

    this.customOptions = [
      {
        name: 'Mi lista °1',
        router: ['/']
      },
      {
        name: 'Mi lista °2',
        router: ['/']
      },
      {
        name: 'Mi lista °3',
        router: ['/']
      },
      {
        name: 'Mi lista °4',
        router: ['/']
      }
    ];
  }
}

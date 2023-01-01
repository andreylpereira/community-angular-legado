import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  title: string = 'GERÊNCIA DE MONITORAMENTO E AVALIAÇÃO DE PROCESSAMENTO EM SAÚDE - GMAPS';
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Convidado } from './convidado';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Convidados';

  convidados: Convidado[] = [];
  constructor(private service: AppService){

  }

  ngOnInit(): void {
    this.service.getConvidados().subscribe(lista => this.convidados = lista)
  }
}

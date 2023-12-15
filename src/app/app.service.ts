import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Convidado } from './convidado';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiURLLocal: string = 'http://localhost:8080';
  constructor( private http: HttpClient) { }

  getConvidados() : Observable<Convidado[]>{  
    return this.http.get<Convidado[]>(this.apiURLLocal);
  }
}

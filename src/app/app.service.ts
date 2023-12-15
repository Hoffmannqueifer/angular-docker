import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Convidado } from './convidado';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiURL: string = 'http://container-spring-docker-v3:8080'; //nome do container envez de localhost
  apiURLLocal: string = 'http://localhost:8090';
  constructor( private http: HttpClient) { }

  getConvidados() : Observable<Convidado[]>{  
    return this.http.get<Convidado[]>(this.apiURL);
  }
}

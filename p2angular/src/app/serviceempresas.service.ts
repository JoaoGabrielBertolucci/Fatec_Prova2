import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { empresa } from './empresa';


@Injectable({
  providedIn: 'root'
})
export class ServiceempresasService {

  url = "http://localhost:3000/empresas"

  constructor(private http : HttpClient) { }

  cadastroEmpresa( empresa: empresa): Observable<empresa>{
    return this.http.post<empresa>(this.url, empresa);
  }
  

}

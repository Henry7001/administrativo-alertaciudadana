import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpService) { }

  login(data: any) {
    return this.http.postData('usuario/Login', data);
  }

}

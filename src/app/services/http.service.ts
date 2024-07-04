import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = environment.Api;

  constructor(private http: HttpClient) { }

  // Método GET
  getData(endpoint: string, headers?: HttpHeaders): Observable<any> {
    const httpHeaders = headers || new HttpHeaders();
    return this.http.get(`${this.baseUrl}/${endpoint}`, { headers: httpHeaders });
  }

  // Método POST
  postData(endpoint: string, data: any, headers?: HttpHeaders): Observable<any> {
    const httpHeaders = headers || new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, { headers: httpHeaders });
  }

  // Método PUT
  putData(endpoint: string, data: any, headers?: HttpHeaders): Observable<any> {
    const httpHeaders = headers || new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, { headers: httpHeaders });
  }

  // Método DELETE
  deleteData(endpoint: string, headers?: HttpHeaders): Observable<any> {
    const httpHeaders = headers || new HttpHeaders();
    return this.http.delete(`${this.baseUrl}/${endpoint}`, { headers: httpHeaders });
  }
}

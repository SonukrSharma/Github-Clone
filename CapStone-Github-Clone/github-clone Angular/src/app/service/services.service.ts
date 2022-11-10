import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Constant } from '../utilities/Constant';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
 
  constructor(private httpclient:HttpClient) { }

  handleError(err: any) {
    return throwError(() => {
      console.log(err);
    });
  }

  getData():Observable<any>{
    return this.httpclient.get<any>(`${Constant.URL}`).pipe(retry(1), catchError(this.handleError));
  }

  login(User:any):Observable<any>{
    return this.httpclient.post(`${Constant.LOGIN}`,User).pipe(retry(1), catchError(this.handleError));
  }

  getUser(id:number):Observable<any>{
    return this.httpclient.get(`${Constant.URL}`+"/"+id).pipe(retry(1), catchError(this.handleError));
  }

  createUser(data:any):Observable<any>{
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.post(`${Constant.URL}`, data, { 'headers': header }).pipe(retry(1), catchError(this.handleError));
  }

  update(user:any){
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.httpclient.put(`${Constant.URL}` +"/"+ user.id, user).pipe(retry(1), catchError(this.handleError));
  }
  
  deleteUser(id: number): Observable<any> {
    return this.httpclient.delete(`${Constant.URL}` + id)
  }

}


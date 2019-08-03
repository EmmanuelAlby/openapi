import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QaSuiteService{
    constructor(private httpClient:HttpClient){

    }
 searchSuite(suiteRequest:any){

    const httpHeaderOption ={
        headers: new HttpHeaders({
            'Content-type' : 'application/json'
        })
    };
   return this.httpClient.post('url',suiteRequest,httpHeaderOption);
 }

}
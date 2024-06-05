import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  //our api
  api="https://retoolapi.dev/HYd96h/data"
  //injecting the HttpClient Service to use it
  constructor(private http: HttpClient) {}
  //function that generates an observable which is the response of GET to our api url
  fetchAllEmployees(){
    return this.http.get(this.api);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { card } from "./questionnairedata";


export class questionnaireservice {
    private _url: string = "/assets/questionnairedata.json";
    

    constructor(private http: HttpClient) {}

    getQuestion(n: number): Observable<card[]> {
        return this.http.get<card[]>(this._url)
    }
    
    getNumberOfQuestions() {
      return this._url.length;
    }
  


}
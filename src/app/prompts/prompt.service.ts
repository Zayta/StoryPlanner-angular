import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {PromptType} from './PromptType'
@Injectable({
  providedIn: 'root'
})
export class PromptService {

  constructor(private http:HttpClient) { }
  configBaseUrl = 'http://writingexercises.co.uk/php/';

  getPrompt(promptType:any) {
    console.log(promptType)
    return this.http.get(this.configBaseUrl+promptType.value+".php");
  }
  


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globalVars from '../../global/globals';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  fetchAllLibraries(callback){
    return this.http.get(globalVars.apiUrl+'libraries/all').subscribe(
      data => callback(data)
    );
  }

  fetchAllBooksInLibrary(id, callback){
    return this.http.get(globalVars.apiUrl+'libraries/libraryid/'+id+'/books/all').subscribe(
      data => callback(data)
    );
  }
}

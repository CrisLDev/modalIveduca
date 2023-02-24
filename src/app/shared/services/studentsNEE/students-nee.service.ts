import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ResponseStudentsNEE } from '../../interfaces/studentsNEE.interfaces';

@Injectable({
  providedIn: 'root'
})

export class StudentsNEEService {

  URI = 'http://20.84.54.175/IviBackendDemo/R32/EstudiantesNee/1259'

  constructor(private http: HttpClient) { }

  public getStudentsNEE(){
    return this.http.get<ResponseStudentsNEE>(this.URI)
  }

}

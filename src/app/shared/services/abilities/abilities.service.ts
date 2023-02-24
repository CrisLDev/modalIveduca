import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAbilities } from '../../interfaces/abilities.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {

  URI = 'http://20.84.54.175/IviBackendDemo/R32/GetCompetencias'

  constructor(private http: HttpClient) { }

  public getStudentsNEE(){
    return this.http.get<ResponseAbilities>(this.URI)
  }

}

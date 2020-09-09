import { Injectable } from '@angular/core';
import { Subcategoria } from './Model/subcategoria';
import { Categoria } from './Model/categoria';
import { PeticionEnvio } from './Model/peticionEnvio';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PhttpService {
  private url: string = "http://localhost:3000";
  private ArrayG: Array<Subcategoria>;
  constructor(private http: HttpClient) { }

  postRespuesta(_body: PeticionEnvio): Observable<Subcategoria> {
    return this.http.post<Subcategoria>(this.url+"/newSubcategoria", _body);
  }
  getRespuesta(_id: String): Observable<Subcategoria[]> {
    let urlcom = this.url + "/subcategorias/" + _id;
    return this.http.get<Subcategoria[]>(urlcom);
  }
  getCategory(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url + "/categorias");
  }
  putRespuesta(_id: number, _body: PeticionEnvio): Observable<Subcategoria> {
    let urlcom = this.url + "/newSubcategoria/1" ;
    return this.http.put<Subcategoria>(urlcom, _body);
  }
  deleteRespuesta(_id: String): Observable<Subcategoria> {
    let urlcom = this.url + "/" + _id;
    return this.http.delete<Subcategoria>(urlcom);
  }
}

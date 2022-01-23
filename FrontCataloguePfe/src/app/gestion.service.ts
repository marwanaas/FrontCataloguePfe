import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor( private http :HttpClient) { }

  getPfes(){
    return this.http.get("http://localhost:8080/Pfes");
  }

getCategorie(){
  return this.http.get("http://localhost:8080/Categories");
}
getPfeByCat(id : number){
return this.http.get("http://localhost:8080/PfeByCat/"+id);
}
getPfesBytitre( titre : string){
return this.http.get("http://localhost:8080/PfesBytitre/"+titre);
}

Add(pfe: any){
  return this.http.post("http://localhost:8080/ajouter",pfe);
}
delete(id :number){
  return this.http.get("http://localhost:8080/supprimer/"+id);
}

}

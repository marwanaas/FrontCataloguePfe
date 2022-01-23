import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
categorie : any ;
pfe :any={
  "titre" : "",
  "cat" : {
    "id" : ""
  }
} ;
  constructor( private gest: GestionService , private route : Router) { }

  ngOnInit(): void {
    this.getCats();
  }




  getCats(){
    this.gest.getCategorie().subscribe({
      next:(data:any) =>{this.categorie =data ;
      },
      error:(err:any)=>{},
      complete:()=>{}
    })
      }


      Add(){
        this.gest.Add(this.pfe).subscribe({
          
          next:(data:any)=>{this.route.navigate(['pfes'])},
          error:(err:any)=> {},
          complete:()=>{}
           }
        )
      }
}

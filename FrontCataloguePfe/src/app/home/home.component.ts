import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pfe : any ;
categorie : any ;
result :number=0 ;
titre : string="";
  constructor(private gest : GestionService ) { }

  ngOnInit(): void {
    this.getPfes();
    this.getCats();
  }


  getPfes(){
this.gest.getPfes().subscribe({
  next:(data:any) =>{this.pfe =data ;
    console.log(data)
    this.result=data.length;
  },
  error:(err:any)=>{},
  complete:()=>{}
})
  }
getpfec(id : number){
this.gest.getPfeByCat(id).subscribe({
next:(data:any) =>{this.pfe=data ;}
,
  error:(err:any)=>{},
  complete:()=>{}

})

}
getCats(){
  this.gest.getCategorie().subscribe({
    next:(data:any) =>{this.categorie =data ;
    },
    error:(err:any)=>{},
    complete:()=>{}
  })
    }


    gettitre(){
   
      if(this.titre.length==0){
        this.getPfes();
      }if(this.titre.length>0){
       this.gest.getPfesBytitre(this.titre).subscribe({
         next:(data:any)=>{this.pfe =data
           
         
           },
         error:(err:any)=>{},
         complete:()=>{}
       })}
      
     }
delete(id : number){
  this.gest.delete(id).subscribe({
    next :(data: any)=> { this.getPfes();},
    error:(err:any)=>{},
    complete:()=>{}
  })
}

  }

/*   getMessage(){
    this.gest.getMessagesResus(this.user.id).subscribe({
      next:(data:any)=>{this.liste =data ;
        console.log(data)},
      error:(err:any)=>{},
      complete:()=>{}
    })
  } */




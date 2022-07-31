import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  isLogged = false;

  persona: persona = new persona("","","");

  constructor (private router:Router, private tokenService: TokenService) {}
  
  
  ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged = true;
  }  else{
    this.isLogged = false;
  }
  }
onLogOut():void{
  this.tokenService.logOut();
  window.location.reload();
}

    login(){
      this.router.navigate(['/login'])
    }
}

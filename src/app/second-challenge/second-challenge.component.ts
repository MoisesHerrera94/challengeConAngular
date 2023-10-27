import { Component } from '@angular/core';

@Component({
  selector: 'app-second-challenge',
  templateUrl: './second-challenge.component.html',
  styleUrls: ['./second-challenge.component.css']
})
export class SecondChallengeComponent {
  data:any[] = [
    {
      nombre:"Jose Maidana",
      edad:25,
      email:"correo@correo.com",
      provincia:"Buenos Aires"
    },
    {
      nombre:"Pedro Gomez",
      edad:33,
      email:"correo@correo.com",
      provincia:"Cordoba"
    },
    {
      nombre:"Marcos Perez",
      edad:23,
      email:"correo@correo.com",
      provincia:"Neuquen"
    },
    {
      nombre:"Maria Bejas",
      edad:28,
      email:"correo@correo.com",
      provincia:"Chubut"
    }
  ]
}

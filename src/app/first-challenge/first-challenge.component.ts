import { Component } from '@angular/core';

@Component({
  selector: 'app-first-challenge',
  templateUrl: './first-challenge.component.html',
  styleUrls: ['./first-challenge.component.css']
})
export class FirstChallengeComponent {


  onSubmit(values:any):void {
    console.log(values);
    
  }
}


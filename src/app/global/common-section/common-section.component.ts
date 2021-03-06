import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-section',
  templateUrl: './common-section.component.html',
  styleUrls: ['./common-section.component.css']
})
export class CommonSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  goToSignup():void{  
    this.router.navigate(['/session/signup']);
  }
}

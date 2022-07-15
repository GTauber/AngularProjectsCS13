import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comum-directives',
  templateUrl: './comum-directives.component.html',
  styleUrls: ['./comum-directives.component.css']
})
export class ComumDirectivesComponent implements OnInit {

  display: boolean = false;
  clickRegistry: Array<any> = [];
  clickCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  btnShowDetails() {
    this.display = !this.display;
    this.clickCount++;
    this.clickRegistry.push(new Date());
  }

}

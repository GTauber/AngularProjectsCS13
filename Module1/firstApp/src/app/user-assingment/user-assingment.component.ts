import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-assingment',
  templateUrl: './user-assingment.component.html',
  styleUrls: ['./user-assingment.component.css']
})
export class UserAssingmentComponent implements OnInit {

  userName: String = "";
  register: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  resetUserName() {
    this.userName = "";
    this.register = true
  }

  test(e: Event) {
    if (this.userName.length <= 1) this.register = false
    else this.register = true;
  }

}

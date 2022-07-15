import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /* It's also possible use different types of selectors, as  
  selector: '[app-servers]' --> Attribute
  selector: '.app-servers'--> Class
  but usually you should use the element one.
  */ 
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowButton: boolean = false;
  statuses: string = "off";
  bolAux: boolean = false;
  serverName: string = "";

  
  constructor() { 
    setTimeout(() => {
      this.allowButton = true;
    }, 3000);

  }

  onUpdateServer() {
    this.bolAux = !this.bolAux;
    if (this.bolAux) this.statuses = "Online!"

    else this.statuses = "Offline!"
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  ngOnInit(): void {
  }

}

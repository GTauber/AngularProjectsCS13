import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: {type: string, name: string, content: string}[] = [];

  //Game related -- >
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onNumberEmitted(number: number) {
    if (number % 2 === 0) this.evenNumbers.push(number);
    else this.oddNumbers.push(number);
  }

  // Game Related ends <--

  onServerAdded(server: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent
    });
  }

  onBlueprintAdded(blueprint: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprint.blueprintName,
      content: blueprint.blueprintContent
    });
  }

}

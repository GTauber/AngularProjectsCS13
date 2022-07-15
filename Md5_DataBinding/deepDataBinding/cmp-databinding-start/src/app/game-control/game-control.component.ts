import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  counter: number = 0;
  @Output() emitter = new EventEmitter<number>();
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  startCron() {
    this.interval = setInterval(() => {
      this.emitter.emit(this.counter++);
      console.log(this.counter)
    }, 1)
  }

  endCron() {
     clearInterval(this.interval)
     this.counter = 0;
     console.clear();
  }

}

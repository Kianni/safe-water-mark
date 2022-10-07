import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-nord-light",
  templateUrl: "./nord-light.component.html",
  styleUrls: ["./nord-light.component.css"],
})
export class NordLightComponent implements OnInit, OnDestroy {
  constructor() {}

  numbers = interval(1000);
  lightOn = new Subscription();
  @Input() dayOrNight;
  togglingLight = true;

  ngOnInit(): void {
    this.lightOn = this.numbers.subscribe((value) => {
      console.log(value);
      this.togglingLight = !this.togglingLight;
    });
  }

  ngOnDestroy(): void {
    this.lightOn.unsubscribe();
  }
}

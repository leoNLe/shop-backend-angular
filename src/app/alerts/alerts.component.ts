import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alerts',
  styleUrls: ['./alerts.component.css'],
  templateUrl: './alerts.component.html'
})
export class AlertsComponent implements OnInit {
  @Input() public message: string;
  @Output() public toggleAlert: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  public ngOnInit(): void {}

  public completedBtn(): void {
    this.toggleAlert.emit();
  }
}

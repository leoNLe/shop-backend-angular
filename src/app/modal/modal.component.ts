import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.css'],
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  constructor() {}

  public closeModal(): void {}
  public ngOnInit(): void {}
}

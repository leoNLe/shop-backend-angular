import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-load-spinner',
  styleUrls: ['./load-spinner.component.css'],
  templateUrl: './load-spinner.component.html'
})
export class LoadSpinnerComponent implements OnInit {
  @Input() public mainColor: string;
  @Input() public accentColor: string;
  @ViewChild('spinnerDiv') public spinnerDiv: ElementRef;
  @ViewChild('spinnerOut') public spinnerOut: HTMLElement;
  constructor(private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.mainColor = this.mainColor || '#eee';
    this.accentColor = this.accentColor || '#ef6565';
  }
}

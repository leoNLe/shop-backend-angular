import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items-container',
  styleUrls: ['./items-container.component.css'],
  templateUrl: './items-container.component.html'
})
export class ItemsContainerComponent implements OnInit {
  @Input() public name: string;
  @Input() public imgArr;

  @ViewChild('itemsContainer') public innerItemsContainer;

  public faChevronLeft = faChevronLeft;
  public faChevronRight = faChevronRight;

  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public scrollTo(direction: number): void {
    // obtain size of viewport/item  container
    const containerWidth = this.innerItemsContainer.nativeElement.offsetWidth;
    // advance the scroll left/right based on direction by one container width;
    this.innerItemsContainer.nativeElement.scrollTo({
      behavior: 'smooth',
      left:
        this.innerItemsContainer.nativeElement.scrollLeft +
        direction * containerWidth
    });
  }
}

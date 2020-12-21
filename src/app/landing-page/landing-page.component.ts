import { Component, OnInit } from '@angular/core';

import FeaturedImages from '../testing-images';
@Component({
  selector: 'app-landing-page',
  styleUrls: ['./landing-page.component.css'],
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  public featuredImages;
  constructor() {
    this.featuredImages = FeaturedImages;
  }

  public ngOnInit(): void {}
}

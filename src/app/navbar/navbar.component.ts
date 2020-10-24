import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    public toShowSignup = false;
    constructor() { }

    public ngOnInit(): void  { }

    public toggleToShowSignup(): void {
        this.toShowSignup = !this.toShowSignup;
    }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  isLoggedIn: boolean = false; // Placeholder for authentication state
  urlToRedirect: string = '';
  successfullyLoggedIn: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event:any) => {
        this.urlToRedirect = event.url;
    });
  }

  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
    this.successfullyLoggedIn = !this.successfullyLoggedIn;
  }

  redirectToLogin(): void {
    this.router.navigate(['']);
  }

}

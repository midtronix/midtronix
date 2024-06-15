import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'mdtrx-root',
  template: `<mdtrx-nx-welcome></mdtrx-nx-welcome>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'client-todo';
}

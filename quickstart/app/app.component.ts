import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: '../templates/layout.html'
/*template: `
   <!-- Always shows a header, even in smaller screens. -->
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row color-moving-cash">
      <!-- Title -->
      <span class="mdl-layout-title">{{title}}</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" routerLink="/dashboard">New Request</a>
        <a class="mdl-navigation__link" routerLink="/heroes">Acaunt</a>
        <a class="mdl-navigation__link" href="">All Request</a>
        <a class="mdl-navigation__link" href=""><i class="material-icons">person</i>&nbsp;{{user}}</a>
      </nav>
    </div>
  </header>
  <main class="mdl-layout__content">
    <div class="page-content">
      <router-outlet></router-outlet>
    </div>
  </main>
</div>

   
 `*/
})
export class AppComponent {
  title = 'Moving Cash';
  user = 'Guest';
}

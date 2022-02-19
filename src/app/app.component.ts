import { Component, NgModule } from '@angular/core';


function initializeApp() {
  if (!localStorage.getItem('welcome')) {
    localStorage.setItem('welcome', 'true');
    this.router.navigateByUrl('/welcome');
  }
}
@NgModule({
  bootstrap: [AppComponent],
})

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  
}

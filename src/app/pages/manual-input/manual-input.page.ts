import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AutoCompleteComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-manual-input',
  templateUrl: './manual-input.page.html',
  styleUrls: ['./manual-input.page.scss'],
})
export class ManualInputPage implements OnInit {
  constructor(private menu: MenuController) { }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  ngOnInit() {
  }
  onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
  @ViewChild('sample')
  public AutoCompleteObj: AutoCompleteComponent;
  // defined the array of data
  public sportsData: Object[] = [
      { Id: 'Game1', Game: 'American Football' },
      { Id: 'Game2', Game: 'Badminton' },
      { Id: 'Game3', Game: 'Basketball' },
      { Id: 'Game4', Game: 'Cricket' },
      { Id: 'Game5', Game: 'Football' },
      { Id: 'Game6', Game: 'Golf' },
      { Id: 'Game7', Game: 'Hockey' },
      { Id: 'Game8', Game: 'Rugby' },
      { Id: 'Game9', Game: 'Snooker' },
      { Id: 'Game10', Game: 'Tennis' }
  ];
  // maps the appropriate column to fields property
  public fields: Object = { value: 'Game' };
  public value: string = '';
  // set the placeholder to AutoComplete input
  public waterMark: string = 'e.g. Basketball';
  // set the height of the popup element
  public height: string = '250px';
  // bind the change event
  public onChange(args: any): void {
      let valueEle: HTMLInputElement = document.getElementsByClassName('e-input')[0] as HTMLInputElement;
      // make empty the input value when typed characters is 'null' in input element
      if (this.AutoCompleteObj.value === "null" || this.AutoCompleteObj.value === null || this.AutoCompleteObj.value === "") {
          valueEle.value = '';
      }
  }
}

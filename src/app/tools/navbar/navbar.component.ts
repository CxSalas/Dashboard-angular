import { Component, OnInit, Input, Output } from '@angular/core';

import { Constants } from '../../globals/Constants';
import { EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  public logo = Constants.Logo;

  constructor() { }


  //Disable and enable the sidebar
  @Output("toggleSidebar") toggleSidebar : EventEmitter<any> = new EventEmitter();

  notificationsItems : MenuItem[];
  accountsItems : MenuItem[];


  //Toggle the sidebar
  toggleWasClicked () : void {
    this.toggleSidebar.emit();
  }

  //Show a color if the icon was clicked
  setItemClicked (item) : void {
    console.log(item);
  }
  
  ngOnInit(): void {
    this.notificationsItems = [{
      label: 'Notificaciones',
      items: [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Download', icon: 'pi pi-fw pi-download'}
      ]
    }];


    this.accountsItems = [{
      label: 'Ajustes',
      items: [
        {label: 'New Pepega', icon: 'pi pi-fw pi-plus'},
        {label: 'Download Pepega', icon: 'pi pi-fw pi-download'}
      ]
    },];
    
  }

}

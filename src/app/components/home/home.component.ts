import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  toggledSidebar : boolean = true;
  
  //Options of the menu
  public items: any[];

  onClickSidebar(): void {
    this.toggledSidebar = !this.toggledSidebar;
  }

  
  ngOnInit(): void {

    this.items = [
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [{
                label: 'New', 
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                    {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                ]
            },
            {label: 'Open', icon: 'pi pi-fw pi-external-link'},
            {separator: true},
            {label: 'Quit', icon: 'pi pi-fw pi-times'}
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
    },
    {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
            {
                label: 'Contents',
                icon: 'pi pi-pi pi-bars'
            },
            {
                label: 'Search', 
                icon: 'pi pi-pi pi-search', 
                items: [
                    {
                        label: 'Text', 
                        items: [
                            {
                                label: 'Workspace'
                            }
                        ]
                    },
                    {
                        label: 'User',
                        icon: 'pi pi-fw pi-file',
                    }
            ]}
        ]
    },
    ];
  }


}

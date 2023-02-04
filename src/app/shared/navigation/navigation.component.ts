import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ktbz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigationItems = [
    {
      label: 'Dashboard',
      href: 'dashboard',
      icon: 'bi-kanban',
    },
    {
      label: 'Create set',
      href: 'create',
      icon: 'bi-file-earmark-plus-fill'
    },
    {
      label: 'Your sets',
      href: 'sets',
      icon: 'bi-card-list'
    },
    {
      label: 'Your groups',
      href: 'groups',
      icon: 'bi-people'
    },
    {
      label: 'Options',
      href: 'options',
      icon: 'bi-sliders'
    },
    {
      label: 'Logout',
      icon: 'bi-box-arrow-right'
    }
  ]

}

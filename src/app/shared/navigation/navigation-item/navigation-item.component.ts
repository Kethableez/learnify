import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface NavigationItem {
  href?: string;
  label: string;
  icon: string;

}

@Component({
  selector: 'ktbz-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.scss']
})
export class NavigationItemComponent implements OnInit {

  @Input()
  item!: NavigationItem;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.currentRoute)
  }

  get currentRoute() {
    return this.router.url.split('/')[1];
  }

  get isActive() {
    return this.currentRoute === this.item.href;
  }

  navigate() {
    this.router.navigate([this.item.href])
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LabelValue } from 'src/app/core/models/label-value.model';

@Component({
  selector: 'ktbz-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input()
  tabs: LabelValue<string>[] = [{label: 'Login', value: 'login'}, { label: 'Register', value: 'register' }];

  @Output()
  tabChanged = new EventEmitter<string>();

  activeTab = this.tabs[0];

  constructor() { }

  ngOnInit(): void {
  }

  isActive(tab: LabelValue<string>) {
    return this.activeTab.value === tab.value;
  }

  toggleTab(tab: LabelValue<string>) {
    this.activeTab = tab;
    this.tabChanged.emit(tab.value);
  }

}

import { Component, ElementRef, EventEmitter, forwardRef, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControlDirective } from '../directives/abstract-control.directive';

@Component({
  selector: 'ktbz-avatar-selection',
  templateUrl: './avatar-selection.component.html',
  styleUrls: ['./avatar-selection.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AvatarSelectionComponent,
      multi: true
    }
  ]
})
export class AvatarSelectionComponent extends AbstractControlDirective<string> implements OnInit  {

  prefix = 'av';
  avatars = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'];
  selectionState: 'open' | 'close' = 'close';
  selectedAvatar = this.avatars[0];

  value = this.getAvatarName(this.avatars[0]);

  @Output()
  onSelected = new EventEmitter<string>();

  @ViewChild('button') button!: ElementRef;
  @ViewChild('selection') selection!: ElementRef;

  getAvatarName(avatar: string) {
    return `${this.prefix}-${avatar}.png`;
  }

  getPath(avatarName: string) {
    return `assets/avatars/${avatarName}`;
  }

  selectAvatar(avatar: string) {
    this.selectedAvatar = avatar;
    this.value = this.getAvatarName(avatar);
    this.doUpdate();
  }

  constructor(private renderer: Renderer2) {
    super();
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.button && this.selection && e.target !== this.button.nativeElement && !e.composedPath().includes(this.selection.nativeElement)) {
        this.toggleSelection('close');
        this.selectAvatar(this.selectedAvatar);
      }
    })
  }


  ngOnInit(): void {
    this.doUpdate();
  }

  toggleSelection(state: 'open' | 'close') {
    if (this.selectionState === state) return;
    this.selectionState = state;
  }
}

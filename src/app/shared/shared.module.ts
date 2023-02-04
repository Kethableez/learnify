import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from './tabs/tabs.module';
import { InputModule } from './input/input.module';
import { AvatarSelectionModule } from './avatar-selection/avatar-selection.module';
import { InputDirective } from './directives/input.directive';
import { FocusDirective } from './directives/focus.directive';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [InputDirective, FocusDirective ],
  imports: [TabsModule, InputModule, AvatarSelectionModule, CommonModule, NavigationModule],
  exports: [
    TabsModule,
    NavigationModule,
    InputDirective,
    FocusDirective,
    InputModule,
    AvatarSelectionModule,
  ],
})
export class SharedModule {}

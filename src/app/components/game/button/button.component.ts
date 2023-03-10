import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent { }
import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-typografie',
  imports: [
    CommonModule
  ],
  templateUrl: './typografie.html',
  styleUrl: './typografie.scss',
})
export class Typografie {
  @Input() text: string | undefined | null = '';
  @Input() size: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'xmedium' | 'large' | 'xlarge' = 'xmedium';
  @Input() color: 'white' | 'white-80' | 'black' | 'grey' | 'green' | 'red' = 'black';
  @Input() weight: 100 | 400 | 500 | 600 | 700 | 800 | 900  = 400;
  @Input() align: 'left' | 'center' | 'right' = 'left';
  @Input() normal: 'normal' | 'italic' = 'normal';
}

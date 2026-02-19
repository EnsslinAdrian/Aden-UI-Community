import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-component',
  imports: [CommonModule],
  templateUrl: './example-component.html',
  styleUrl: './example-component.scss',
})
export class ExampleComponent  {
  @Input() text: string = '';
  @Input() size: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'xmedium' | 'large' | 'xlarge' = 'xmedium';
  @Input() color: 'white' | 'white-80' | 'black' | 'grey' | 'green' | 'red' = 'black';
  @Input() weight: 100 | 400 | 500 | 600 | 700 | 800 | 900  = 400;
  @Input() align: 'left' | 'center' | 'right' = 'left';
  @Input() normal: 'normal' | 'italic' = 'normal';

  // <example-component text="Hello World" size="large" color="white" [weight]="600" [align]="'left'" [normal]="'italic'"></example-component>
}

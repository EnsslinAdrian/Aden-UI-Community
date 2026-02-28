import { Component, effect, ElementRef, input, viewChild } from '@angular/core';
import * as Prism from 'prismjs';

import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-bash';

@Component({
  selector: 'app-code-highlight',
  imports: [],
  templateUrl: './code-highlight.html',
  styleUrl: './code-highlight.scss',
})
export class CodeHighlight {
  code = input.required<string>();
  language = input<string>('markup');
  codeElement = viewChild<ElementRef<HTMLElement>>('codeElement');

  constructor() {
    effect(() => {
      const el = this.codeElement();
      const codeValue = this.code();

      if (el) {
        const lang = this.language() === 'html' ? 'markup' : this.language();
        el.nativeElement.className = `language-${lang}`;
        el.nativeElement.textContent = codeValue;
        Prism.highlightElement(el.nativeElement);
      }
    });
  }
}

import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

@Component({
  selector: 'app-ui-playground-docs',
  imports: [],
  templateUrl: './ui-playground-docs.html',
  styleUrl: './ui-playground-docs.scss',
})
export class UiPlaygroundDocs {
  private sanitizer = inject(DomSanitizer);

  code = input.required<string>();

  renderedContent = computed<SafeHtml>(() => {
    const raw = this.code();
    if (!raw) return '';
    return this.sanitizer.bypassSecurityTrustHtml(marked.parse(raw) as string);
  });
}

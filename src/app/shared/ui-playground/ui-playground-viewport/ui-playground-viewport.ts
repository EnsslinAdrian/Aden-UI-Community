import { Component, computed, input, output, signal } from '@angular/core';
import { PlaygroundFile } from '../ui-playground';
import { CodeHighlight } from "../../code-highlight/code-highlight";
import { UiPlaygroundDocs } from "../ui-playground-docs/ui-playground-docs";

@Component({
  selector: 'app-ui-playground-viewport',
  imports: [CodeHighlight, UiPlaygroundDocs],
  templateUrl: './ui-playground-viewport.html',
  styleUrl: './ui-playground-viewport.scss',
})
export class UiPlaygroundViewport {
  activeTab = input.required<'docs' | 'code' | 'install'>();
  files = input<PlaygroundFile[]>([]);
  activeFileIndex = input<number>(0);
  docsCode = input<string>('');
  installCode = input<string>('');

  fileIndexChange = output<number>();
  copied = signal(false);

  currentCodeDisplay = computed(() => {
    if (this.activeTab() === 'install') return this.installCode();
    if (this.activeTab() === 'docs') return this.docsCode();
    const files = this.files();
    return files.length > 0 ? files[this.activeFileIndex()]?.code || '' : '';
  });

  currentLanguage = computed(() => {
    if (this.activeTab() === 'install') return 'bash';
    if (this.activeTab() === 'docs') return 'markdown';
    const files = this.files();
    return files.length > 0 ? files[this.activeFileIndex()]?.language || 'typescript' : 'typescript';
  });

  selectFile(index: number) {
    this.fileIndexChange.emit(index);
  }

  copyCode() {
    const text = this.currentCodeDisplay();
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }

  getFileName(path: string): string {
    return path.split('/').pop() || path;
  }
}

import { Component, computed, input, signal } from '@angular/core';
import { CodeHighlight } from "../code-highlight/code-highlight";
import { UiPlaygroundHeader } from "./ui-playground-header/ui-playground-header";
import { CommonModule } from '@angular/common';

export interface PlaygroundFile {
  name: string;
  language: 'markup' | 'scss' | 'typescript' | 'bash';
  code: string;
}

export interface MetaData {
  title: string;
  description: string;
  username: string;
}

type PlaygroundTab = 'preview' | 'code' | 'install';

@Component({
  selector: 'app-ui-playground',
  standalone: true,
  imports: [CodeHighlight, UiPlaygroundHeader, CommonModule],
  templateUrl: './ui-playground.html',
  styleUrl: './ui-playground.scss',
})
export class UiPlayground {
  meta = input<MetaData>();
  copied = signal(false);

  files = input<PlaygroundFile[]>([]);
  installCode = input<string>('');

  activeTab = signal<PlaygroundTab>('preview');
  activeFileIndex = signal<number>(0);

  currentCodeDisplay = computed(() => {
    if (this.activeTab() === 'install') {
      return this.installCode();
    }

    const currentFiles = this.files();
    if (currentFiles.length > 0) {
      return currentFiles[this.activeFileIndex()]?.code || '';
    }

    return '';
  });

  currentLanguage = computed(() => {
    if (this.activeTab() === 'install') return 'bash';

    const currentFiles = this.files();
    return currentFiles[this.activeFileIndex()]?.language || 'typescript';
  });

  setTab(tab: PlaygroundTab) {
    this.activeTab.set(tab);
  }

  setFileIndex(index: number) {
    this.activeFileIndex.set(index);
  }

  copyCode() {
    const textToCopy = this.currentCodeDisplay();
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }

}


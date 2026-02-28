import { Component, input, signal } from '@angular/core';
import { UiPlaygroundHeader } from "./ui-playground-header/ui-playground-header";
import { CommonModule } from '@angular/common';
import { UiPlaygroundViewport } from "./ui-playground-viewport/ui-playground-viewport";

export interface PlaygroundFile {
  name: string;
  language: 'markup' | 'scss' | 'typescript' | 'bash' | 'markdown';
  code: string;
}

export interface MetaData {
  title: string;
  description: string;
  username: string;
}

type PlaygroundTab = 'preview' | 'docs' | 'code' | 'install';

@Component({
  selector: 'app-ui-playground',
  standalone: true,
  imports: [UiPlaygroundHeader, CommonModule, UiPlaygroundViewport],
  templateUrl: './ui-playground.html',
  styleUrl: './ui-playground.scss',
})
export class UiPlayground {
  meta = input<MetaData>();
  files = input<PlaygroundFile[]>([]);
  installCode = input<string>('');
  docsCode = input<string>('');

  activeTab = signal<PlaygroundTab>('preview');
  activeFileIndex = signal<number>(0);

  setTab(tab: PlaygroundTab) {
    this.activeTab.set(tab);
    if (tab === 'code') this.activeFileIndex.set(0);
  }

  setFileIndex(index: number) {
    this.activeFileIndex.set(index);
  }
}

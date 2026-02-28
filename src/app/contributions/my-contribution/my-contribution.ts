import { Component } from '@angular/core';
import { MetaData, PlaygroundFile, UiPlayground } from "../../shared/ui-playground/ui-playground";
import { MyComponent } from "./my-component/my-component";

// @ts-expect-error
import docsRaw from './docs.md' with { loader: 'text' };
// @ts-expect-error
import toggleTs from './my-component/my-component.ts' with { loader: 'text' };
// @ts-expect-error
import toggleHtml from './my-component/my-component.html' with { loader: 'text' };
// @ts-expect-error
import toggleScss from './my-component/my-component.scss' with { loader: 'text' };
// @ts-expect-error
import toggleInterface from './interfaces/interface' with { loader: 'text' };
// @ts-expect-error
import toggleService from './services/services.ts' with { loader: 'text' };


@Component({
  selector: 'app-my-contribution',
  imports: [UiPlayground, MyComponent],
  templateUrl: './my-contribution.html',
  styleUrls: ['./my-contribution.scss'],
})
export class MyContribution {
  meta: MetaData = {
    title: 'Insert title here',
    description: 'Insert description here',
    username: 'Insert username from AdenUi here'
  };

  install = `Here you can provide installation instructions for your contribution. For example:`;

  docs = docsRaw;

  files: PlaygroundFile[] = [
    { name: 'my-component.html', language: 'markup', code: toggleHtml },
    { name: 'my-component.scss', language: 'scss', code: toggleScss },
    { name: 'my-component.ts', language: 'typescript', code: toggleTs },
    { name: 'interface.ts', language: 'typescript', code: toggleInterface },
    { name: 'service.ts', language: 'typescript', code: toggleService },
  ];

}

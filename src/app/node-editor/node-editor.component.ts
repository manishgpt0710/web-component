import { Component, Input } from '@angular/core';

@Component({
  selector: 'gunslinger-node-editor',
  templateUrl: './node-editor.component.html',
  styleUrls: ['./node-editor.component.scss']
})
export class NodeEditorComponent {
  @Input() node: any;
}

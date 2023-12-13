import { Component, Input } from '@angular/core';

@Component({
  selector: 'gunslinger-node-editor-json',
  templateUrl: './node-editor-json.component.html',
  styleUrls: ['./node-editor-json.component.scss']
})
export class NodeEditorJsonComponent {
  @Input() node: any;
  @Input() readonly: boolean = false;
}

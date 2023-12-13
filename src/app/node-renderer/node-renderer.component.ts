import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'gunslinger-node-renderer',
  templateUrl: './node-renderer.component.html',
  styleUrls: ['./node-renderer.component.scss']
})
export class NodeRendererComponent {
  @Input() node: any;
  @Output() newSubItem: any;
  @Output() open: any;
  @Output() remove: any;
}

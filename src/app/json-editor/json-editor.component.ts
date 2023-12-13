import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { JsonTemplateBuilderService } from '../../services/json-template-builder.service';

@Component({
  selector: 'gunslinger-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class JsonEditorComponent implements OnInit {

  @Input() template: any;
  @Input() readonly: boolean = false;
  // @Input() nodeRenderer: TemplateRef<HTMLElement>;
  constructor(private jsonTemplateBuilder: JsonTemplateBuilderService) { }

  ngOnInit(): void {
    this.jsonTemplateBuilder.init();
  }
  remove(scope: any) {
    scope.remove();
  }

  toggle(scope: any) {
    scope.toggle();
  }

  newSubItem(scope: any) {
    const nodeData = scope.$modelValue;
    const parentName = this.getParentReference(nodeData);

    const newNode = {
      id: nodeData.id * 10 + nodeData.nodes.length,
      name: nodeData.name + '.' + (nodeData.nodes.length + 1),
      editing: false,
      objectName: parentName,
      renderAs:'Node',
      nodes: []
    };
    nodeData.nodes.push(newNode);
  }

  open(scope: any) {
    const nodeData = scope.$modelValue;
    nodeData.editing = !nodeData.editing;
  }

  getParentReference(parentNode: any): string | undefined {
    if (!parentNode) {
      return undefined;
    }
    if (!parentNode.source) {
      return undefined;
    }
    if (parentNode.source === 'None') {
      return undefined;
    }
    if (parentNode.source === 'Candidate') {
      return undefined;
    }
    if (parentNode.source === 'ExtendedData') {
      return undefined;
    }
    return parentNode.source;
  }
}

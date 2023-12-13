import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceFieldsService {
  private sourceFields: SourceField[] = [];

  constructor() {
    this.init();
  }

  findField(objectName: string, accesor: string): SourceField | undefined {
    return this.sourceFields.find(x => x.objectName === objectName && x.accesor === accesor);
  }

  findBySource(source: string): SourceField {
    return this.sourceFields.find(x => x.source === source)!;
  }

  clear() {
    this.sourceFields.length = 0;
  }

  addFieldDefinition(name: string, objectName: string, accesor: string): SourceField {
    let field = this.findField(objectName, accesor);

    if (field !== undefined) {
      return field;
    }

    field = new SourceField(name, objectName, accesor);
    this.sourceFields.push(field);

    return field;
  }

  addChildFieldDefinition(parent: SourceField, name: string, accesor: string): SourceField {
    const objectName = `${parent.objectName}.${parent.accesor}`;
    const field = this.addFieldDefinition(name, objectName, accesor);
    field.parent = parent;

    return field;
  }

  init() {
    if (this.sourceFields.length > 0) {
      return;
    }

    // this.clear();
  }

  addCustomVariable(name: string, id: string): SourceField {
    return this.addFieldDefinition(name, 'CustomVariables', id);
  }
}

export class SourceField {
  name: string;
  source: string;
  objectName: string;
  accesor: string;
  parent: SourceField | undefined;
  isMethod: boolean = false;
  parameters: { name: string; label: string }[] | undefined;

  constructor(name: string, objectName: string, accesor: string) {
    this.name = name;
    this.source = `${objectName}.${accesor}`;
    this.objectName = objectName;
    this.accesor = accesor;
  }

  populateField(node: any) {
    node.source = this.source;
    node.objectName = this.objectName;
    node.accesor = this.accesor;
    node.isMethod = this.isMethod;

    if (this.parameters) {
      node.parameters = this.parameters.map(parameter => ({ name: parameter.name, label: parameter.label }));
    } else {
      node.parameters = undefined;
    }
  }
}

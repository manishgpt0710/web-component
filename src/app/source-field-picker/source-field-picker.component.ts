import { Component, Input, OnInit } from '@angular/core';
import { SourceFieldsService } from '../../services/source-fields.service';

@Component({
  selector: 'gunslinger-source-field-picker',
  templateUrl: './source-field-picker.component.html',
  styleUrls: ['./source-field-picker.component.scss']
})
export class SourceFieldPickerComponent implements OnInit {
  @Input() field: any;
  @Input() readonly: boolean = false;
  constructor(private sourceFieldsService: SourceFieldsService) { }

  ngOnInit(): void {
  }

  sourceFieldPickerChange(sender: any): void {
    const selectOption = this.sourceFieldsService.findBySource(sender.source);
    selectOption.populateField(sender);
  }

  getParentName(objectName: string): string {
    let result = objectName;
    const parent = this.sourceFieldsService.findBySource(objectName);
    if (parent) {
      result = parent.name;
    }
    return result;
  }

  getNewParentName(objectName: string): string | undefined {
    if (objectName === undefined) {
      return undefined;
    }
    if (objectName == '') {
      return undefined;
    }
    if (objectName == 'None') {
      return undefined;
    }
    if (objectName == 'CustomVariables') {
      return undefined;
    }
    if (objectName == 'ExtendedData') {
      return undefined;
    }
    if (objectName == 'ExtendedData.Candidate') {
      return undefined;
    }
    if (objectName == 'ExtendedData.Candidate.Application.MyResume') {
      return undefined;
    }
    if (objectName == 'ExtendedData.Candidate.Application.MXResume') {
      return undefined;
    }
    const parent = this.sourceFieldsService.findBySource(objectName);
    if (parent) {
      return parent.name;
    }
    return undefined;
  }

  changeObjectName(objectName: string): void {
    this.field.objectName = objectName;
    this.field.source = undefined;
    this.field.accesor = undefined;
    this.field.isMethod = undefined;
    this.field.parameters = undefined;
  }

}

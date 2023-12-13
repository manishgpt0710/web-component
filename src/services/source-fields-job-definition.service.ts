import { Injectable } from '@angular/core';
import { SourceFieldsService } from './source-fields.service';

@Injectable({
  providedIn: 'root'
})
export class SourceFieldsJobDefinitionService {
  constructor(private sourceFields: SourceFieldsService) {
    const jobDefinition = this.sourceFields.addFieldDefinition('Job','ExtendedData','Candidate.IA_Job');
    this.loadJobDefinition(jobDefinition);
  }

  private loadJobDefinition(jobDefinition: any): void {
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Title', 'JobTitle');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job User Email', 'Elements.UserEmail.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Contact Email', 'Elements.ContactEmail.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Skin DID', 'Elements.JobSkinDID.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Template DID', 'Elements.TemplateDID.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Company DID', 'CompanyDID');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job HH Name', 'Elements.HHName.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job HostSite', 'HostSite');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Country Code' , 'CountryCode');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Country Name' , 'Country');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job City' , 'City');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job State' , 'State');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Location' , 'Location');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Address 1' , 'StreetAddr1');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Address 2' , 'StreetAddr2');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job ZipCode' , 'ZipCode');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Customer Account Code' , 'Elements.CustomerAccountCode.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 1' , 'Elements.CustomField1.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 2' , 'Elements.CustomField2.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 3' , 'Elements.CustomField3.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 4' , 'Elements.CustomField4.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 5' , 'Elements.CustomField5.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 6' , 'Elements.CustomField6.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 7' , 'Elements.CustomField7.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 8' , 'Elements.CustomField8.Value');
    this.sourceFields.addChildFieldDefinition(jobDefinition, 'Job Custom Field 9' , 'Elements.CustomField9.Value');
    var getAppendixMethod = this.sourceFields.addChildFieldDefinition(jobDefinition, 'Appendix', 'get_GetAppendixValue');
    getAppendixMethod.isMethod = true;
    getAppendixMethod.parameters = [
        {name:'sKey',label:'Appendix Name'},
        {name:'oLocale',label:'Locate'},
        {name:'bDecode',label:'Decode'}
    ];
  }
}

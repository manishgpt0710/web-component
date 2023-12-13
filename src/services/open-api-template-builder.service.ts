import { Injectable } from '@angular/core';
import { MessageTemplateBuilderService } from './message-template-builder.service';
import { SourceFieldsService } from './source-fields.service';

@Injectable({
  providedIn: 'root'
})
export class OpenApiTemplateBuilderService {

  constructor(private sourceFields: SourceFieldsService,
    private messageTemplateBuilder: MessageTemplateBuilderService) {
  }

  init() {
    this.loadStandardJSONforMultipleCandidates();
  }
   loadStandardJSONforMultipleCandidates() {
    const templateName = 'Standard Open API Candidate';
    const template = this.loadJSONOutputTypeOption(templateName);
    this.getJSONCandidateDefinition(template.definition);
  }

   getJSONCandidateDefinition(candidate: any) {
    const result = this.loadNode('candidate');
    result.renderAs = 'Node';
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.FirstName', 'firstName'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.MiddleName', 'middleName'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.LastName', 'lastName'));
    result.nodes.push(this.loadFieldList('ExtendedData.Candidate.EmailAddress', 'email'));
    result.nodes.push(this.getJSONPhoneDefinition());
    result.nodes.push(this.getJSONCandidateGeographyDefinition());
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Source', 'source'));
    result.nodes.push(this.getJSONDocumentDefinition());
    candidate.nodes.push(result);
    return candidate;
  }
   getJSONPhoneDefinition() {
    const result = this.loadNode('phoneNumbers');
    result.renderAs = 'List';
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Phone', 'phoneNumber'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.WorkPhone', 'WorkPhone'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.MobilePhone', 'MobilePhone'));
    return result;
  }

   getJSONJobGeographyDefinition() {
    const result = this.loadNode('geography');
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.IA_Job.StreetAddr1', 'address1'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.IA_Job.StreetAddr2', 'address2'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.IA_Job.State', 'adminArea'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.IA_Job.CountryCode', 'country'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.IA_Job.City', 'locality'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.IA_Job.ZipCode', 'postalCode'));
    return result;
  }

   getJSONCandidateGeographyDefinition() {
    const result = this.loadNode('geography');
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Address1', 'address1'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Address2', 'address2'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.StateName', 'adminArea'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Country', 'country'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.CityName', 'locality'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ZipCode', 'postalCode'));
    return result;
  }

   getJSONDocumentDefinition(): any {
    const result = this.loadNode('documents');

    result.nodes.push(this.getJSONApplicationDefinition());
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.CoverLetter', 'CoverLetter'));
    result.nodes.push(this.getJSONEducationDefinition());
    result.nodes.push(this.getJSONEEODefinition());
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.HighestEduc', 'highestEducation'));
    result.nodes.push(this.getJSONRequisitionDefinition());
    result.nodes.push(this.getJSONResumeDefinition());
    result.nodes.push(this.getJSONWorkHistoryDefinition());

    return result;
  }

   getJSONApplicationDefinition(): any {
    const result = this.loadNode('application');

    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Application.DID', 'applicationId'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ModifiedDate', 'date'));

    return result;
  }

   getJSONEEODefinition(): any {
    const result = this.loadNode('eeo');

    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EEO.Disability', 'disability'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EEO.Gender', 'gender'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EEO.Race', 'race'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EEO.Veteran', 'veteran'));

    return result;
  }

   getJSONRequisitionDefinition(): any {
    const result = this.loadNode('requisition');

    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.JobID', 'atsRequisitionId'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.IA_Job.Elements.HHName.Value', 'companyName'));
    result.nodes.push(this.getJSONJobGeographyDefinition());

    return result;
  }

   getJSONResumeDefinition(): any {
    const result = this.loadNode('resume');

    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ResumeFile.Base64Stream', 'document'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ResumeFile.FileName', 'fileName'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ResumeFile.ResumeHtml', 'html'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ResumeFile.ResumeText', 'Text'));

    return result;
  }

   getJSONEducationDefinition(): any {
    const result = this.loadFieldNode('ExtendedData.Candidate.Education', 'educationHistory');

    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Education.DegreeCode', 'degree'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Education.Major', 'major'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Education.School', 'school'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Education.GraduationDate', 'graduationDate'));

    return result;
  }

   getJSONWorkHistoryDefinition(): any {
    const result = this.loadNode('workHistory');

    result.nodes.push(this.getJSONHistoryDefinition());
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.MostRecentCompany', 'mostRecentCompany'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.MostRecentJobTitle', 'mostRecentJobTitle'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Relocation', 'relocation'));

    return result;
  }
   getJSONHistoryDefinition(): any {
    var result = this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences", "histories");
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences.CompanyName","company"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences.EndDate","endDate"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences.IsCurrentPosition","isCurrentPosition"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences.JobTitle","jobTitle"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences.StartDate","startDate"));

    return result;
  }

  getJSONQuestionsDefinition(): any {
    const result = this.loadFieldNode('ExtendedData.Candidate.Questionnaire', 'Questions');
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Questionnaire.QuestionKey', 'QuestionKey'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Questionnaire.Response', 'Response'));

    return result;
  }

  loadJSONOutputTypeOption(name: string): any {
    const template = this.messageTemplateBuilder.getTemplate(name, 'json');
    template.definition.nodes = [];
    template.definition.isList = false;
    return template;
  }

  loadNode(name: string): any {
    const result = {
      name,
      objectName: undefined,
      nodes: [],
      editing: false,
      renderAs: 'Node'
    };
    return result;
  }

  loadFieldNode(source: string, name: string): any {
    const field = this.sourceFields.findBySource(source);
    const result = this.loadNode(name);
    field.populateField(result);

    return result;
  }

  loadFieldList(source: string, name: string): any {
    const field = this.sourceFields.findBySource(source);
    const result = this.loadNode(name);
    result.renderAs = 'List';
    field.populateField(result);
    return result;
  }
}

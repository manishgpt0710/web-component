import { Injectable } from '@angular/core';
import { SourceFieldsService } from './source-fields.service';
import { MessageTemplateBuilderService } from './message-template-builder.service';

@Injectable({
  providedIn: 'root'
})
export class JsonTemplateBuilderService {

  constructor(private sourceFieldsService: SourceFieldsService,
    private messageTemplateBuilder: MessageTemplateBuilderService) {}
  init() {
    this.loadStandardJSONforMultipleCandidates();
  }

  private loadStandardJSONforMultipleCandidates() {
    const templateName = 'Standard JSON Candidate';
    const template = this.loadJSONOutputTypeOption(templateName);
    this.getJSONCandidateDefinition(template.definition);
  }

  private getJSONCandidateDefinition(candidate: any) {
    candidate.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EmailAddress', 'EmailAddress'));
    candidate.nodes.push(this.loadFieldNode('ExtendedData.Candidate.FirstName', 'FirstName'));
    candidate.nodes.push(this.loadFieldNode('ExtendedData.Candidate.MiddleName', 'MiddleName'));
    candidate.nodes.push(this.loadFieldNode('ExtendedData.Candidate.LastName', 'LastName'));
    candidate.nodes.push(this.loadFieldNode('ExtendedData.Candidate.JobID', 'JobID'));
    candidate.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ModifiedDate', 'ModifiedDate'));

    candidate.nodes.push(this.getJSONContactDefinition());
    candidate.nodes.push(this.getJSONEEODefinition());
    candidate.nodes.push(this.getJSONResumeDefinition());
    candidate.nodes.push(this.getJSONEducationDefinition());
    candidate.nodes.push(this.getJSONWorkHistoryDefinition());
    candidate.nodes.push(this.getJSONQuestionsDefinition());

    return candidate;
  }

  private getJSONContactDefinition() {
    const result = this.loadNode('Contact');

    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Phone', 'Phone'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ZipCode', 'ZipCode'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Address1', 'Address1'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Address2', 'Address2'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.Country', 'Country'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.CityName', 'City'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.StateCode', 'State'));

    return result;
  }
   getJSONEEODefinition() {
    const result = this.loadNode('EEO');

    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EEO.Gender', 'Gender'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EEO.Race', 'Race'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EEO.Veteran', 'Veteran'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.EEO.Disability', 'Disability'));

    return result;
  }
   getJSONResumeDefinition() {
    const result = this.loadNode('Resume');

    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.CoverLetter', 'CoverLetter'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ResumeFile.ResumeText', 'ResumeText'));
    result.nodes.push(this.loadFieldNode('ExtendedData.Candidate.ResumeFile.Base64Stream', 'Base64Stream'));
    return result;
  }
  getJSONEducationDefinition() {
    const result = this.loadFieldNode("ExtendedData.Candidate.Education", "EducationHistory");
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.Education.School", "School"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.Education.Major", "Major"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.Education.DegreeCode", "DegreeCode"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.Education.GraduationDate", "GraduationDate"));

    return result;
  }

  getJSONWorkHistoryDefinition() {
    const result = this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences", "WorkHistory");
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences.CompanyName", "CompanyName"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences.JobTitle", "JobTitle"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.CompanyExperiences.StartDate", "StartDate"));

    return result;
  }

  getJSONQuestionsDefinition() {
    const result = this.loadFieldNode("ExtendedData.Candidate.Questionnaire", "Questions");
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.Questionnaire.QuestionKey", "QuestionKey"));
    result.nodes.push(this.loadFieldNode("ExtendedData.Candidate.Questionnaire.Response", "Response"));

    return result;
  }

  loadJSONOutputTypeOption(name: string) {
    const template = this.messageTemplateBuilder.getTemplate(name, 'json');
    template.definition.nodes = [];
    template.definition.isList = true;

    return template;
  }

  loadNode(name: string) {
    const result:any = {};
    result.name = name;
    result.objectName = undefined;
    result.nodes = [];
    result.editing = false;
    result.renderAs = 'Node';

    return result;
  }

  loadFieldNode(source: string, name: string) {
    const field = this.sourceFieldsService.findBySource(source);
    const result = this.loadNode(name);
    field.populateField(result);

    return result;
  }
}

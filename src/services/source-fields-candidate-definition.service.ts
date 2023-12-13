import { Injectable } from '@angular/core';
import { SourceFieldsService } from './source-fields.service';

@Injectable({
  providedIn: 'root'
})
export class SourceFieldsCandidateDefinitionService {
  constructor(private sourceFields: SourceFieldsService) {
    const cbCandidateDefinition = this.sourceFields.addFieldDefinition('Candidate', 'ExtendedData', 'Candidate');
    this.loadCandidateDefinition(cbCandidateDefinition);
    this.loadJobDefinition(cbCandidateDefinition);
    this.loadResumeDefinition(cbCandidateDefinition);
    this.loadEEODefinition(cbCandidateDefinition);
    this.loadEducationDefinition(cbCandidateDefinition);
    this.loadWorkHistoryDefinition(cbCandidateDefinition);
    this.loadCompanyExperiencesDefinition(cbCandidateDefinition);
    this.loadQuestionnaireDefinition(cbCandidateDefinition);
    this.loadInterestsDefinition(cbCandidateDefinition);
    this.loadExternalResumeDefinition(cbCandidateDefinition);
  }

  private loadCandidateDefinition(cbCandidateDefinition: any): void {
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Email Address', 'EmailAddress');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'First Name', 'FirstName');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Middle Name', 'MiddleName');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Last Name', 'LastName');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Full Name', 'FullName');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Join/Application Date', 'ApplicationDate');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'ApplicationDID', 'Application.DID');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Modified Date', 'ModifiedDate');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Source(TN Source Tracking)', 'Source');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Country', 'Country');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'State Name', 'StateName');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'State Code', 'StateCode');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'City', 'CityName');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Full Address', 'Address');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Address1', 'Address1');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Address2', 'Address2');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Zip Code', 'ZipCode');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Main Phone', 'Phone');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Work Phone', 'WorkPhone');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Mobile Phone', 'MobilePhone');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Desired Salary', 'DesiredSalary');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Desired Pay Rate', 'DesiredPayRate');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Most Recent Company', 'MostRecentCompany');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Most Recent Job Title', 'MostRecentJobTitle');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Work Status', 'WorkStatus');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Highest Education', 'HighestEduc');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Security Clearance', 'SecurityClearance');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Relocation', 'Relocation');
    // ... add other fields for Candidate
  }

  private loadJobDefinition(cbCandidateDefinition: any): void {
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Is Application', 'IsApplication');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Job ID', 'JobID');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Job Title', 'IA_Job.JobTitle');
    // ... add other fields for Job
  }

  private loadResumeDefinition(cbCandidateDefinition: any): void {
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Cover Letter', 'CoverLetter');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Resume Text ', 'ResumeFile.ResumeText');

    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Resume Html ', 'ResumeFile.ResumeHtml');

    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Resume Has Document?', 'HasDocument');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Resume Base 64 Stream ', 'ResumeFile.Base64Stream');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Resume File Name', 'ResumeFile.FileName');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Resume MIME Type', 'ResumeFile.MIMEType');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Resume File Extension', 'ResumeFile.FileExtension');
    // ... add other fields for Resume
  }

  private loadEEODefinition(cbCandidateDefinition: any): void {
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Has EEO', 'HasEEO');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Race', 'EEO.Race');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Gender', 'EEO.Gender');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Veteran ', 'EEO.Veteran');
    this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Disability ', 'EEO.Disability');
    // ... add other fields for EEO
  }

  private loadEducationDefinition(cbCandidateDefinition: any): void {
    var education = this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Education(0..N)', 'Education');

    this.sourceFields.addChildFieldDefinition(education, 'School', 'School');
    this.sourceFields.addChildFieldDefinition(education, 'Major', 'Major');
    this.sourceFields.addChildFieldDefinition(education, 'Degree Code', 'DegreeCode');
    this.sourceFields.addChildFieldDefinition(education, 'Graduation Date', 'GraduationDate');
    // ... add fields for Education
  }

  private loadWorkHistoryDefinition(cbCandidateDefinition: any): void {
    var workHistory = this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'WorkHistory(0..N)', 'CompanyExperiences');

    this.sourceFields.addChildFieldDefinition(workHistory, 'Company Name', 'CompanyName');
    this.sourceFields.addChildFieldDefinition(workHistory, 'Job Title', 'JobTitle');
    this.sourceFields.addChildFieldDefinition(workHistory, 'Start Date', 'StartDate');
    this.sourceFields.addChildFieldDefinition(workHistory, 'End Date', 'EndDate');
    this.sourceFields.addChildFieldDefinition(workHistory, 'Is Current Position', 'IsCurrentPosition');
    // ... add fields for WorkHistory
  }

  private loadCompanyExperiencesDefinition(cbCandidateDefinition: any): void {
    var companyExperiences = this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Company Experiences(0..N)', 'GetCompanyExperiencesV2');
    companyExperiences.isMethod = true;

    this.sourceFields.addChildFieldDefinition(companyExperiences, 'Company Name', 'CompanyName');
    this.sourceFields.addChildFieldDefinition(companyExperiences, 'Job Title', 'JobTitle');
    this.sourceFields.addChildFieldDefinition(companyExperiences, 'Start Date', 'StartDate');
    this.sourceFields.addChildFieldDefinition(companyExperiences, 'End Date', 'EndDate');
    this.sourceFields.addChildFieldDefinition(companyExperiences, 'Tenure', 'Tenure');
    // ... add fields for CompanyExperiences
  }

  private loadQuestionnaireDefinition(cbCandidateDefinition: any): void {
    var questions = this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Question(0..N)', 'Questionnaire');
    this.loadQuestionFieldDefinition(questions);

    var searchQuestion = this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Question(By text)', 'Questionnaire.GetByQuestion');
    searchQuestion.isMethod = true;
    searchQuestion.parameters = [{name:'Question',label:'Question Text'}];
    this.loadQuestionFieldDefinition(searchQuestion);

    var searchQuestionByKey = this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Question(By key)', 'Questionnaire.GetByQuestionKey');
    searchQuestionByKey.isMethod = true;
    searchQuestionByKey.parameters = [{name:'Key',label:'Question Key'}];
    this.loadQuestionFieldDefinition(searchQuestionByKey);
    // ... add fields for Questionnaire
  }

  private loadQuestionFieldDefinition(question: any): void {
    this.sourceFields.addChildFieldDefinition(question, 'Question Text' , 'Question');
    this.sourceFields.addChildFieldDefinition(question, 'Answer Text', 'Response');
    this.sourceFields.addChildFieldDefinition(question, 'Question Key', 'QuestionKey');
    this.sourceFields.addChildFieldDefinition(question, 'Answer Key', 'AnswerKey');
  }

  private loadInterestsDefinition(cbCandidateDefinition: any): void {
    var interests = this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'Interests(0..N)', 'GetInterest');
    interests.isMethod = true;

    this.sourceFields.addChildFieldDefinition(interests, 'Interest' , 'Interest');
    this.sourceFields.addChildFieldDefinition(interests, 'Experience' , 'ExperienceMonths');
    this.sourceFields.addChildFieldDefinition(interests, 'Job Titles' , 'JobTitles');
    // ... add fields for Interests
  }

  private loadExternalResumeDefinition(cbCandidateDefinition: any): void {
    var externalResume = this.sourceFields.addChildFieldDefinition(cbCandidateDefinition, 'External Resume', 'GetExternalResume');
    externalResume.isMethod = true;

    this.sourceFields.addChildFieldDefinition(externalResume, 'TimeStamp' , 'TimeStamp');
    this.sourceFields.addChildFieldDefinition(externalResume, 'Work Status' , 'HomeLocation.WorkStatus');
    this.sourceFields.addChildFieldDefinition(externalResume, 'Jobs Last Three Years' , 'JobsLastThreeYears');
    this.sourceFields.addChildFieldDefinition(externalResume, 'Last Job Tenure Months' , 'LastJobTenureMonths');
    this.sourceFields.addChildFieldDefinition(externalResume, 'Motivation To Change Jobs' , 'MotivationToChangeJobs');
    this.sourceFields.addChildFieldDefinition(externalResume, 'Employment Type' , 'EmploymentType');
    // ... add fields for ExternalResume
  }
}

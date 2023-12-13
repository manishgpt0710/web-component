import { Injectable } from '@angular/core';
import { SourceFieldsService, SourceField } from './source-fields.service';

@Injectable({
  providedIn: 'root'
})
export class SourceFieldsResumeDefinitionService {

  constructor(private sourceFields: SourceFieldsService) {
    this.init();
  }

  init() {
    const resumeDefinition: SourceField = this.sourceFields.addFieldDefinition('Resume', 'ExtendedData', 'Candidate.Application.MyResume');
    this.loadResumeDefinition(resumeDefinition);

    const mxResumeDefinition = this.sourceFields.addFieldDefinition('Extended Resume', 'ExtendedData', 'Candidate.Application.MXResume');
    this.loadMXResumeDefinition(mxResumeDefinition);
    this.loadRelocationsDefinition(mxResumeDefinition);
  }
  loadResumeDefinition(resumeDefinition: SourceField) {
    this.sourceFields.addChildFieldDefinition(resumeDefinition, 'ID', 'IR_ResumeDID');
    this.sourceFields.addChildFieldDefinition(resumeDefinition, 'Title', 'IR_ResumeTitle');
    this.sourceFields.addChildFieldDefinition(resumeDefinition, 'Currently Employed?', 'EI_IR_CurrentlyEmployed');
    this.sourceFields.addChildFieldDefinition(resumeDefinition, 'Most Recent Job Title', 'IR_MostRecentJobTitle');
    this.sourceFields.addChildFieldDefinition(resumeDefinition, 'Does manage Others?', 'EI_IR_ManagedOthers');
  }

  loadMXResumeDefinition(mxResumeDefinition: SourceField) {
    this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Desired Pay', 'Elements.DesiredPay.Value,');
    this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Desired Pay Type', 'Elements.DesiredPayTypeRW.Value');
    this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Number of Managed', 'NumberManaged');

    const experienceMonths = this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Months of Experience(0..N)', 'GetExperienceMonths');
    experienceMonths.isMethod = true;

    const desiredJobList = this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Desired Job(0..N)', 'GetJobType');
    desiredJobList.isMethod = true;

    const languagesList = this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Languages(0..N)', 'GetLanguages');
    languagesList.isMethod = true;

    const shiftPreferenceList = this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Shift Preference(0..N)', 'GetShiftPreference');
    shiftPreferenceList.isMethod = true;

    const questionReponse = this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Find response', 'get_GetQuestionResponse');
    questionReponse.isMethod = true;
    questionReponse.parameters = [
      { name: 'sTag', label: 'Question Key' },
      { name: 'sCat', label: 'Category' },
      { name: 'MXLocale', label: 'Locate' },
      { name: 'bDecode', label: 'Decode' }
    ];
  }

  loadRelocationsDefinition(mxResumeDefinition: SourceField) {
    const relocation = this.sourceFields.addChildFieldDefinition(mxResumeDefinition, 'Relocations(0..N)', 'Relocations');

    this.sourceFields.addChildFieldDefinition(relocation, 'City', 'Elements.City.Value');
    this.sourceFields.addChildFieldDefinition(relocation, 'State', 'Elements.State.Value');
    this.sourceFields.addChildFieldDefinition(relocation, 'Country', 'Elements.Country.Value');
    this.sourceFields.addChildFieldDefinition(relocation, 'ZipCode', 'Elements.ZipCode.Value');
    this.sourceFields.addChildFieldDefinition(relocation, 'WorkStatus', 'Elements.WorkStatus.Value');
  }
}

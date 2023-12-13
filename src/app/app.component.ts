import { Component } from '@angular/core';
import { MessageTemplateBuilderService, Template } from '../services/message-template-builder.service';
import { SourceFieldsService } from '../services/source-fields.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-component';
  applink: any;

  readonly: boolean = false;
  template: any;
  outputType: any;
  outputTypeOptions: any;

  constructor(private messageTemplateBuilder: MessageTemplateBuilderService,
    private sourceFields: SourceFieldsService,
    private sourceFieldsCandidateDefinition: SourceFieldsCandidateDefinitionService,
    private sourceFieldsJobDefinition: SourceFieldsJobDefinitionService,
    private sourceFieldsResumeDefinition: SourceFieldsResumeDefinitionService) {
      this.applink = JSON.parse('{"createdDt":"2019-09-20T16:17:40.12","dedupingLevel":"None","displayName":"AdeccoStaffing_Applications","atsName":"Homegrown","logicType":"Standard","duplicateExpireDate":"2119-09-08T16:53:00","duplicateWindow":0,"duplicateWindowType":"days","entityMarkerDate":"2023-12-13T07:56:32.48","environment":"Production","MsgTemplate":{"TemplateHeaderBlob":"","TemplateFooterBlob":"","TemplateBlob":{"nodes":[{"name":"FirstName","objectName":"ExtendedData.Candidate","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.FirstName","accesor":"FirstName","$$hashKey":"object:37409"},{"name":"LastName","objectName":"ExtendedData.Candidate","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.LastName","accesor":"LastName","$$hashKey":"object:37411"},{"name":"Email","objectName":"ExtendedData.Candidate","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.EmailAddress","accesor":"EmailAddress","$$hashKey":"object:37408"},{"name":"phoneNumber","objectName":"ExtendedData.Candidate","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.Phone","accesor":"Phone","$$hashKey":"object:37523","defaultValue":"555-555-5555"},{"name":"ZipCode","objectName":"ExtendedData.Candidate","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.ZipCode","accesor":"ZipCode","$$hashKey":"object:37524","defaultValue":"55555"},{"name":"Experiences","objectName":"ExtendedData.Candidate","nodes":[{"name":"AccountName","objectName":"ExtendedData.Candidate.CompanyExperiences","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.CompanyExperiences.CompanyName","accesor":"CompanyName","$$hashKey":"object:37571"},{"name":"Title","objectName":"ExtendedData.Candidate.CompanyExperiences","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.CompanyExperiences.JobTitle","accesor":"JobTitle","$$hashKey":"object:37572"},{"name":"StartDate","nodes":[{"id":null,"name":"Date","editing":false,"objectName":"ExtendedData.Candidate.CompanyExperiences","renderAs":"Node","nodes":[],"$$hashKey":"object:4622","source":"ExtendedData.Candidate.CompanyExperiences.EndDate","accesor":"EndDate"}],"editing":false,"renderAs":"Node","$$hashKey":"object:37573"},{"id":null,"name":"EndDate","editing":false,"renderAs":"Node","nodes":[{"id":null,"name":"Date","editing":false,"objectName":"ExtendedData.Candidate.CompanyExperiences","renderAs":"Node","nodes":[],"$$hashKey":"object:4442","source":"ExtendedData.Candidate.CompanyExperiences.EndDate","accesor":"EndDate"}],"$$hashKey":"object:64975"},{"id":null,"name":"Location","editing":false,"renderAs":"Node","nodes":[{"id":null,"name":"FormattedAddress","editing":false,"objectName":"ExtendedData.Candidate","renderAs":"Node","nodes":[],"$$hashKey":"object:66701","source":"ExtendedData.Candidate.Address","accesor":"Address"}],"$$hashKey":"object:66303"},{"id":null,"name":"Description","editing":false,"renderAs":"Node","nodes":[],"$$hashKey":"object:66312"}],"editing":false,"renderAs":"List","source":"ExtendedData.Candidate.CompanyExperiences","accesor":"CompanyExperiences","$$hashKey":"object:37418"},{"name":"JobId","objectName":"ExtendedData.Candidate","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.JobID","accesor":"JobID","$$hashKey":"object:37412"},{"id":null,"name":"Source","editing":false,"objectName":"Constant","renderAs":"Node","nodes":[],"$$hashKey":"object:67250","defaultValue":"CareerBuilder"},{"name":"Documents","nodes":[{"id":null,"name":"Name","editing":false,"objectName":"ExtendedData.Candidate","renderAs":"Node","nodes":[],"$$hashKey":"object:64343","source":"ExtendedData.Candidate.ResumeFile.FileName","accesor":"ResumeFile.FileName"},{"id":null,"name":"ContentType","editing":false,"objectName":"ExtendedData.Candidate","source":"ExtendedData.Candidate.ResumeFile.MIMEType","accesor":"ResumeFile.MIMEType","renderAs":"Node","nodes":[],"$$hashKey":"object:64352"},{"name":"Content","objectName":"ExtendedData.Candidate","nodes":[],"editing":false,"renderAs":"Node","source":"ExtendedData.Candidate.ResumeFile.Base64Stream","accesor":"ResumeFile.Base64Stream","$$hashKey":"object:37553"}],"editing":false,"renderAs":"Node","$$hashKey":"object:37416"},{"id":null,"name":"IsApplyWithIndeed","editing":false,"objectName":"Constant","renderAs":"Node","nodes":[],"$$hashKey":"object:67518","defaultValue":"false"}],"isList":true},"AppLinkDID":"SC0010079HHTPQ3ZMBPD","ContentType":"json","DID":"SC004WG62XF0M1NQ7XF3","CreatedDT":"2019-09-20T16:17:40.223","ModifiedDT":"2023-08-28T13:42:42.9","IsDeleted":false},"hasMessageTemplate":true,"lastRunDt":"2023-12-13T08:01:58.403","modifiedDt":"2023-12-13T08:01:58.403","runType":"PARALLEL-RT","throttleCount":1,"useClientProduction":true,"modifiedBy":"Joe.Kuhs@careerbuilder.com"}');
    }

  ngOnInit(): void {
    if (!(this.applink.configuration)) {
      this.applink.configuration = {};
    }
    if (!(this.applink.configuration.messageBuilder)) {
      this.applink.configuration.messageBuilder = {};
    }

    if (this.messageTemplateBuilder.doesApplinkSupportMesageTemplate(this.applink)) {
      this.sourceFields.addCustomVariable('Resume File Name (After File Format)', 'LastResumeName');
    }

    this.template = this.applink.configuration.messageBuilder;
    this.template.outputType = null;
    this.template.outputTypeOptions = [];
    this.messageTemplateBuilder.templates.forEach(template => this.template.outputTypeOptions.push(template));
    this.messageTemplateBuilder.clear();

    if (this.applink.MsgTemplate) {
      var template = this.messageTemplateBuilder.loadTemplateFromMsgTemplate(this.applink.MsgTemplate);
      this.template.outputTypeName = template!.name;
      this.template.outputType = template;
    }
    if (this.messageTemplateBuilder.doesApplinkSupportOpenAPI(this.applink)) {
      this.openApiTemplateBuilder.init();
      if (!this.applink.MsgTemplate) {
        var selectOption = this.messageTemplateBuilder.findTemplate('Standard Open API Candidate');
        this.template.outputType = selectOption;
        this.template.outputTypeName = selectOption?.name;
      }
    } else {
      // this.csvTemplateBuilder.init();
      // this.xmlTemplateBuilder.init();
      // this.jsonTemplateBuilder.init();
      // this.textTemplateBuilder.init();
      // this.openApiTemplateBuilder.init();
    }
  }

  getOutputType(): void {
    const selectOption = this.messageTemplateBuilder.findTemplate(this.template.outputTypeName);
    this.template.outputType = selectOption;
  }
}

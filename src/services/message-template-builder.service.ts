import { Injectable } from '@angular/core';

@Injectable()
export class MessageTemplateBuilderService {
  public templates = new Map<string, Template>();

  constructor() {
    this.loadTemplates();
  }

  private loadTemplates(): void {
    // this.templates.set('Custom', new Template('Custom', 'text'));
    // this.templates.set('Custom xml', new Template('Custom xml', 'xml'));
    // this.templates.set('Custom csv', new Template('Custom csv', 'csv'));
    this.templates.set('Custom json', new Template('Custom json', 'json'));
  }

  public getTemplate(name: string, type: string): Template {
    if (this.templates.has(type)) {
      return this.templates.get(type)!;
    }
    return new Template(name, type);
  }

  public clear() {
    if (this.templates) {
      this.templates.clear();
    }
  }

  public findTemplate(outputTypeName: string): Template | undefined {
    return this.templates.get(outputTypeName);
  }

  public loadTemplateFromMsgTemplate(msgTemplate: any): Template | undefined {

    const type = 'json';  // msgTemplate.ContentType || 'text';
    const template = new Template(`Custom ${type}`, type, msgTemplate);
    this.templates.set(type, template);
    return template;
  }

  public doesApplinkSupportMesageTemplate(applink: any): boolean {
    if (!applink || !applink.deliveryMethodId) {
      return false;
    }

    if (applink.deliveryType === 'FTP' || applink.deliveryType === 'Email' || applink.deliveryType === 'Rest API' || applink.deliveryType === 'Rest API' || this.doesApplinkSupportOpenAPI(applink) || applink.MsgTemplate) {
      return true;
    }

    return false;
  }

  public doesApplinkSupportOpenAPI(applink: any): boolean {
    if (applink.deliveryMethodId === 'DM0067F6GSS9YV4PGYTF' || applink.deliveryMethodId === 'DM000Y46PSZGJ06K2HLD' || applink.deliveryMethodId === 'DW008CC5WD5XJP7Z5XGW') {
      return true;
    }

    return false;
  }
}

export class Template {
  name: string;
  type: string;
  url: string;
  definition: any;
  outputType?: Template;
  outputTypeName?: string;
  outputTypeOptions?: Template[];
  TemplateHeaderBlob?: any;
  TemplateFooterBlob?: any;

  constructor(name: string, type: string, msgTemplate?: any) {
    this.name = name;
    this.type = type;
    this.url = this.getTemplateUrl();
    this.TemplateHeaderBlob = msgTemplate?.TemplateHeaderBlob;
    this.TemplateFooterBlob = msgTemplate?.TemplateFooterBlob;

    if ((this.type === 'xml' || this.type === 'csv' || this.type === 'json') && msgTemplate?.TemplateBlob) {
      this.definition = JSON.parse(msgTemplate.TemplateBlob);
    } else {
      this.definition = {};
    }
  }

  loadMsgTemplate(msgTemplate: any): any {
    msgTemplate = msgTemplate || {};
    msgTemplate.ContentType = this.type;
    msgTemplate.TemplateHeaderBlob = this.TemplateHeaderBlob;
    msgTemplate.TemplateBlob = this.definition;
    msgTemplate.TemplateFooterBlob = this.TemplateFooterBlob;

    if (this.type === 'xml' || this.type === 'csv' || this.type === 'json') {
      msgTemplate.TemplateBlob = JSON.stringify(this.definition);
    }

    return msgTemplate;
  }

  private getTemplateUrl(): string {
    // if (this.type === 'xml')
    //   return 'xmlEditor.html';
    // else if (this.type === 'csv')
    //   return 'csvEditor.html';
    // else if (this.type === 'json')
    //   return 'jsonEditor.html';

    // return 'textEditor.html';
    return 'jsonEditor.html';
  }

}

import { Component } from '@angular/core';
import { MessageTemplateBuilderService, Template } from '../services/message-template-builder.service';
import { SourceFieldsService } from '../services/source-fields.service';
import { OpenApiTemplateBuilderService } from '../services/open-api-template-builder.service';
import { JsonTemplateBuilderService } from '../services/json-template-builder.service';

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
    private openApiTemplateBuilder: OpenApiTemplateBuilderService,
    private jsonTemplateBuilder: JsonTemplateBuilderService,
    private sourceFields: SourceFieldsService) {
      this.applink = JSON.parse(`{
        "accounts": [
            {
                "id": "SCCL26S6MV4ZL7CZ1X0C",
                "accountId": "AT-9900533116",
                "createdDt": "2021-08-18T13:02:34.817",
                "status": "Active"
            },
            {
                "id": "SC001VR6CRZ4XWPNCK7R",
                "accountId": "AT-ADE000443",
                "createdDt": "2019-09-20T16:17:40.137",
                "status": "Active"
            },
            {
                "id": "SC2R4GY6Z23TK6BKXBT0",
                "accountId": "PDS-PDS010",
                "createdDt": "2023-08-28T13:42:42.87",
                "status": "Active"
            },
            {
                "id": "SCD87S6700JZNDQ71FFP",
                "accountId": "AT-9900901199",
                "createdDt": "2022-06-21T12:04:36.417",
                "status": "Active"
            },
            {
                "id": "SCCM35F78YKCV1Z19T21",
                "accountId": "AT-ADE000314",
                "createdDt": "2021-02-19T17:10:24.367",
                "status": "Active"
            }
        ],
        "createdDt": "2019-09-20T16:17:40.12",
        "dedupingLevel": "None",
        "deliveryGroups": {
            "Open API Messages": [
                {
                    "configuration": "",
                    "default": "[\r\n  {\"Name\":\"Create Candidate\",\r\n        \"BaseUri\":\"https://service.customer.com/\",\r\n        \"Service\":\"service/endpoint\",\r\n        \"Method\":\"POST\",\r\n        \"DataFormat\":\"JSON\",\r\n  \"ContentType\":\"application/json\",\r\n        \"Parameters\":[\r\n                   {\"Name\":\"clientId\",\"Value\":\"\",\"Type\":\"Httpheader\"},\r\n                   {\"Name\":\"clientSecret\",\"Value\":\"\",\"Type\":\"Httpheader\"},\r\n                   {\"Name\":\"Content-Type\",\"Value\":\"application/json\",\"Type\":\"Httpheader\"},\r\n                   {\"Name\":\"application/json\",\"SourceType\":\"main_template\",\"Type\":\"RequestBody\"}],\r\n        \"ResponseParsers\":[{ \"StatusCode\":\"OK\",\r\n       \"LogEventRegExp\":\"\\\"Success\\\": true\",\r\n       \"LogEventType\":\"Trace\",\r\n       \"LogEventName\":\"Candidate Created\",\r\n       \"LogEventText\":\"\"\r\n      },\r\n      { \"StatusCode\":\"OK\",\r\n       \"LogEventRegExp\":\"\\\"Success\\\": false([^\\\"]*)\\\"ErrorMessages\\\":([^]]*)]\",\r\n       \"LogEventType\":\"FieldValidationException\",\r\n       \"LogEventText\":\"\"\r\n      },\r\n      { \"StatusCode\":\"0\",\r\n       \"LogEventType\":\"Exception\",\r\n       \"LogEventText\":\"The is an internal error in the ATS server.\"\r\n      },\r\n      { \"StatusCode\":\"InternalServerError\",\r\n       \"LogEventType\":\"Exception\",\r\n       \"LogEventText\":\"The is an internal error in the ATS server.\"\r\n      },\r\n      { \"StatusCode\":\"NOTOK\",\r\n       \"LogEventType\":\"Exception\",\r\n       \"LogEventText\":\"The is an ATS server.\"\r\n      }\r\n      ]\r\n  }]",
                    "fieldId": "DF005GB6DYZH6KV0NP6H",
                    "group": "Open API Messages",
                    "help": "This is a structure allowing you to configure the rest calls to the API",
                    "label": "Manage Definitions",
                    "name": "RestDefinitions",
                    "order": 1,
                    "placeholder": "",
                    "required": true,
                    "sensitive": false,
                    "type": "Object:RestDefinitions",
                    "visible": true,
                    "createdDt": "2019-09-20T16:17:40.257",
                    "environment": "Production",
                    "id": "AV007XC6W8LFGJFLCNCF",
                    "modifiedDt": "2023-08-28T13:42:42.933",
                    "value": "[{\"Name\":\"Candidate Post\",\"BaseUri\":\"https://services-soa.nam.adecco.net/CareerBuilder/\",\"Service\":\"Applies\",\"Method\":\"POST\",\"DataFormat\":\"JSON\",\"Parameters\":[{\"Name\":\"KEY\",\"Value\":\"zzMi49s4AzMQ0aEuMberER==\",\"Type\":\"HttpHeader\"},{\"Name\":\"text/json\",\"SourceType\":\"main_template\",\"Type\":\"RequestBody\"}],\"ResponseParsers\":[{\"StatusCode\":\"OK\",\"LogEventRegExp\":\"\\\"Status Code\\\"\\\\: *\\\"200\\\", *\\\"Description\\\"\\\\: *\\\"([^\\\"]*)\\\"\",\"LogEventType\":\"Trace\",\"LogEventName\":\"Candidate Created\",\"LogEventText\":\"\"},{\"StatusCode\":\"OK\",\"LogEventRegExp\":\"\\\"Status Code\\\"\\\\: *\\\"200\\\", *\\\"Description\\\"\\\\: *\\\"([^\\\"]*)\\\"\",\"LogEventType\":\"Trace\",\"LogEventName\":\"Job Application Created\",\"LogEventText\":\"\"},{\"StatusCode\":\"OK\",\"LogEventRegExp\":\"status=\\\"Error\\\" message=\\\"([^\\\"]*)\\\"\",\"LogEventType\":\"FieldValidationException\",\"LogEventText\":\"\"},{\"StatusCode\":\"0\",\"LogEventType\":\"Exception\",\"LogEventText\":\"The is an internal error in the ATS server.\"},{\"StatusCode\":\"InternalServerError\",\"LogEventType\":\"Exception\",\"LogEventText\":\"The is an internal error in the ATS server.\"}]}]"
                },
                {
                    "configuration": "",
                    "default": "[\r\n  {\"Name\":\"Oauth Api\",\r\n        \"BaseUri\":\"\",\r\n        \"Method\":\"POST\",\r\n\t\t\"AccessToken\":\"access_token\",\r\n        \"DataFormat\":\"JSON\",\r\n  \"ContentType\":\"application/json\",\r\n        \"Parameters\":[\r\n                   {\"Name\":\"clientId\",\"Value\":\"\",\"Type\":\"Httpheader\"},\r\n                   {\"Name\":\"clientSecret\",\"Value\":\"\",\"Type\":\"Httpheader\"},\r\n                   {\"Name\":\"Content-Type\",\"Value\":\"application/json\",\"Type\":\"Httpheader\"},\r\n                   {\"Name\":\"application/json\",\"SourceType\":\"main_template\",\"Type\":\"RequestBody\"}]\r\n\t\t\t\t   }]",
                    "fieldId": "DF003W25VR1BZCHGN7Z3",
                    "group": "Open API Messages",
                    "help": "This is a structure allowing you to configure the rest calls to the API",
                    "label": "Manage Definitions",
                    "name": "OauthDefinitions",
                    "order": 7,
                    "placeholder": "",
                    "required": false,
                    "sensitive": false,
                    "type": "Object:OauthDefinitions",
                    "visible": true,
                    "createdDt": "2022-05-02T08:16:24.53",
                    "environment": "Production",
                    "id": "AV94D2A98DE66E4BACAF",
                    "modifiedDt": "2023-08-28T13:42:42.933",
                    "value": "[{\"Name\":\"Oauth Api\",\"BaseUri\":\"\",\"Method\":\"POST\",\"AccessToken\":\"access_token\",\"DataFormat\":\"JSON\",\"ContentType\":\"application/json\",\"Parameters\":[{\"Name\":\"clientId\",\"Value\":\"\",\"Type\":\"Httpheader\"},{\"Name\":\"clientSecret\",\"Value\":\"\",\"Type\":\"Httpheader\"},{\"Name\":\"Content-Type\",\"Value\":\"application/json\",\"Type\":\"Httpheader\"},{\"Name\":\"application/json\",\"SourceType\":\"main_template\",\"Type\":\"RequestBody\"}]}]"
                }
            ],
            "Push Config": [
                {
                    "configuration": "",
                    "default": "",
                    "fieldId": "DF003MV65S1K4934VHCG",
                    "group": "Push Config",
                    "help": "",
                    "label": "Customer Screener  Url",
                    "name": "pushConfig.customerScreenerUrl",
                    "order": 2,
                    "placeholder": "",
                    "required": false,
                    "sensitive": false,
                    "type": "String",
                    "visible": true,
                    "createdDt": "2022-05-02T08:16:24.53",
                    "environment": "Production",
                    "id": "AV8CEFE64D961D4E3582",
                    "modifiedDt": "2023-08-28T13:42:42.947",
                    "value": ""
                },
                {
                    "configuration": "",
                    "default": "False",
                    "fieldId": "DF008FM61K1CGRY2V7SD",
                    "group": "Push Config",
                    "help": "",
                    "label": "Enable Screener",
                    "name": "pushConfig.enabledScreener",
                    "order": 3,
                    "placeholder": "",
                    "required": true,
                    "sensitive": false,
                    "type": "Boolean",
                    "visible": true,
                    "createdDt": "2022-03-25T18:05:43.84",
                    "environment": "Production",
                    "id": "AV2Z3RH636TTBBRJD4SH",
                    "modifiedDt": "2023-08-28T13:42:42.947",
                    "value": "False"
                },
                {
                    "configuration": "",
                    "default": "",
                    "fieldId": "DF003Z05VMX1CYD4NS62",
                    "group": "Push Config",
                    "help": "",
                    "label": "Screener Mapping File",
                    "name": "pushConfig.screenerMappingFile",
                    "order": 4,
                    "placeholder": "",
                    "required": false,
                    "sensitive": false,
                    "type": "Object",
                    "visible": true,
                    "createdDt": "2022-05-02T08:16:24.53",
                    "environment": "Production",
                    "id": "AVB658BC06E0B04E75A7",
                    "modifiedDt": "2023-08-28T13:42:42.947",
                    "value": ""
                },
                {
                    "configuration": "",
                    "default": "False",
                    "fieldId": "DF004WC61M9FSWG2X66D",
                    "group": "Push Config",
                    "help": "",
                    "label": "US Candidates Only",
                    "name": "pushConfig.enableUSCandidateOnly",
                    "order": 5,
                    "placeholder": "",
                    "required": false,
                    "sensitive": false,
                    "type": "Boolean",
                    "visible": true,
                    "createdDt": "2022-05-02T08:16:24.53",
                    "environment": "Production",
                    "id": "AV267C3C61B8B84FAFA7",
                    "modifiedDt": "2023-08-28T13:42:42.947",
                    "value": "False"
                },
                {
                    "configuration": "",
                    "default": "False",
                    "fieldId": "DF0083N766K06WPP2P8T",
                    "group": "Push Config",
                    "help": "",
                    "label": "Send Analytics Section",
                    "name": "pushConfig.sendAnalyticsSection",
                    "order": 6,
                    "placeholder": "",
                    "required": false,
                    "sensitive": false,
                    "type": "Boolean",
                    "visible": true,
                    "createdDt": "2022-05-02T08:16:24.53",
                    "environment": "Production",
                    "id": "AVE4752E4C3527478794",
                    "modifiedDt": "2023-08-28T13:42:42.947",
                    "value": "False"
                },
                {
                    "configuration": "",
                    "default": "{\r\n  \"nodes\": [\r\n    {\r\n      \"name\": \"candidate\",\r\n      \"nodes\": [\r\n        {\r\n          \"name\": \"firstName\",\r\n          \"source\": \"firstName\"\r\n        },\r\n        {\r\n          \"name\": \"middleName\",\r\n          \"source\": \"middleName\"\r\n        },\r\n        {\r\n          \"name\": \"lastName\",\r\n          \"source\": \"lastName\"\r\n        },\r\n        {\r\n          \"name\": \"email\",\r\n          \"source\": \"email\",\r\n          \"renderAs\": \"List\"\r\n        },\r\n        {\r\n          \"name\": \"phoneNumbers\",\r\n          \"nodes\": [\r\n            {\r\n              \"name\": \"phoneNumber\",\r\n              \"source\": \"phoneNumbers.home\"\r\n            },\r\n            {\r\n              \"name\": \"WorkPhone\",\r\n              \"source\": \"phoneNumbers.work\"\r\n            },\r\n            {\r\n              \"name\": \"MobilePhone\",\r\n              \"source\": \"phoneNumbers.mobile\"\r\n            }\r\n          ],\r\n          \"renderAs\": \"List\"\r\n        },\r\n        {\r\n          \"name\": \"geography\",\r\n          \"nodes\": [\r\n            {\r\n              \"name\": \"address1\",\r\n              \"source\": \"geography.address1\"\r\n            },\r\n            {\r\n              \"name\": \"address2\",\r\n              \"source\": \"geography.address2\"\r\n            },\r\n            {\r\n              \"name\": \"adminArea\",\r\n              \"source\": \"geography.stateName\"\r\n            },\r\n            {\r\n              \"name\": \"country\",\r\n              \"source\": \"geography.country\"\r\n            },\r\n            {\r\n              \"name\": \"locality\",\r\n              \"source\": \"geography.locality\"\r\n            },\r\n            {\r\n              \"name\": \"postalCode\",\r\n              \"source\": \"geography.postalCode\"\r\n            }\r\n          ]\r\n        },\r\n        {\r\n          \"name\": \"source\",\r\n          \"source\": \"source\"\r\n        },\r\n        {\r\n          \"name\": \"documents\",\r\n          \"nodes\": [\r\n            {\r\n              \"name\": \"application\",\r\n              \"nodes\": [\r\n                {\r\n                  \"name\": \"applicationId\",\r\n                  \"source\": \"documents.application.applicationId\"\r\n                },\r\n                {\r\n                  \"name\": \"date\",\r\n                  \"source\": \"documents.application.date\"\r\n                }\r\n              ]\r\n            },\r\n            {\r\n              \"name\": \"CoverLetter\",\r\n              \"source\": \"documents.coverLetter\"\r\n            },\r\n            {\r\n              \"name\": \"educationHistory\",\r\n              \"nodes\": [\r\n                {\r\n                  \"name\": \"degree\",\r\n                  \"source\": \"degree\"\r\n                },\r\n                {\r\n                  \"name\": \"major\",\r\n                  \"source\": \"major\"\r\n                },\r\n                {\r\n                  \"name\": \"school\",\r\n                  \"source\": \"school\"\r\n                },\r\n                {\r\n                  \"name\": \"graduationDate\",\r\n                  \"source\": \"graduationDate\"\r\n                }\r\n              ],\r\n              \"renderAs\": \"List\",\r\n              \"source\": \"documents.educationHistory\"\r\n            },\r\n            {\r\n              \"name\": \"highestEducation\",\r\n              \"source\": \"documents.highestEducation\"\r\n            },\r\n            {\r\n              \"name\": \"requisition\",\r\n              \"nodes\": [\r\n                {\r\n                  \"name\": \"atsRequisitionId\",\r\n                  \"source\": \"documents.requisition.requisitionId\"\r\n                },\r\n                {\r\n                  \"name\": \"companyName\",\r\n                  \"source\": \"documents.requisition.companyName\"\r\n                },\r\n                {\r\n                  \"name\": \"geography\",\r\n                  \"nodes\": [\r\n                    {\r\n                      \"name\": \"address1\",\r\n                      \"source\": \"documents.requisition.geography.address\"\r\n                    },\r\n                    {\r\n                      \"name\": \"address2\",\r\n                      \"source\": \"documents.requisition.geography.streetAddress2\"\r\n                    },\r\n                    {\r\n                      \"name\": \"adminArea\",\r\n                      \"source\": \"documents.requisition.geography.adminArea\"\r\n                    },\r\n                    {\r\n                      \"name\": \"country\",\r\n                      \"source\": \"documents.requisition.geography.country\"\r\n                    },\r\n                    {\r\n                      \"name\": \"countryCode\",\r\n                      \"source\": \"documents.requisition.geography.countryCode\"\r\n                    },\r\n                    {\r\n                      \"name\": \"locality\",\r\n                      \"source\": \"documents.requisition.geography.locality\"\r\n                    },\r\n                    {\r\n                      \"name\": \"postalCode\",\r\n                      \"source\": \"documents.requisition.geography.postalCode\"\r\n                    }\r\n                  ]\r\n                }\r\n              ]\r\n            },\r\n            {\r\n              \"name\": \"resume\",\r\n              \"nodes\": [\r\n                {\r\n                  \"name\": \"document\",\r\n                  \"source\": \"documents.resume.document\"\r\n                },\r\n                {\r\n                  \"name\": \"fileName\",\r\n                  \"source\": \"documents.resume.fileName\"\r\n                },\r\n                {\r\n                  \"name\": \"html\",\r\n                  \"source\": \"documents.resume.html\"\r\n                },\r\n                {\r\n                  \"name\": \"Text\",\r\n                  \"source\": \"documents.resume.text\"\r\n                }\r\n              ]\r\n            },\r\n            {\r\n              \"name\": \"workHistory\",\r\n              \"nodes\": [\r\n                {\r\n                  \"name\": \"histories\",\r\n                  \"nodes\": [\r\n                    {\r\n                      \"name\": \"company\",\r\n                      \"source\": \"company\"\r\n                    },\r\n                    {\r\n                      \"name\": \"endDate\",\r\n                      \"source\": \"endDate\"\r\n                    },\r\n                    {\r\n                      \"name\": \"isCurrentPosition\",\r\n                      \"source\": \"isCurrentPosition\"\r\n                    },\r\n                    {\r\n                      \"name\": \"jobTitle\",\r\n                      \"source\": \"jobTitle\"\r\n                    },\r\n                    {\r\n                      \"name\": \"startDate\",\r\n                      \"source\": \"startDate\"\r\n                    }\r\n                  ],\r\n                  \"renderAs\": \"List\",\r\n                  \"source\": \"documents.workHistory.histories\"\r\n                },\r\n                {\r\n                  \"name\": \"mostRecentCompany\",\r\n                  \"source\": \"documents.workHistory.mostRecentCompany\"\r\n                },\r\n                {\r\n                  \"name\": \"mostRecentJobTitle\",\r\n                  \"source\": \"documents.workHistory.mostRecentJobTitle\"\r\n                },\r\n                {\r\n                  \"name\": \"relocation\",\r\n                  \"source\": \"documents.workHistory.relocation\"\r\n                }\r\n              ]\r\n            },\r\n            {\r\n              \"name\": \"eeo\",\r\n              \"nodes\": [\r\n                {\r\n                  \"name\": \"disability\",\r\n                  \"source\": \"documents.eeo.disability\"\r\n                },\r\n                {\r\n                  \"name\": \"gender\",\r\n                  \"source\": \"documents.eeo.gender\"\r\n                },\r\n                {\r\n                  \"name\": \"race\",\r\n                  \"source\": \"documents.eeo.race\"\r\n                },\r\n                {\r\n                  \"name\": \"veteran\",\r\n                  \"source\": \"documents.eeo.veteran\"\r\n                }\r\n              ]\r\n            }\r\n          ]\r\n        }\r\n      ]\r\n    }\r\n  ]\r\n}",
                    "fieldId": "DF000DB6ZDWXR9MWR6ZF",
                    "group": "Push Config",
                    "help": "",
                    "label": "Candidate Payload Mapping File",
                    "name": "pushConfig.payloadMappingFile",
                    "order": 8,
                    "placeholder": "",
                    "required": false,
                    "sensitive": false,
                    "type": "Object",
                    "visible": true,
                    "createdDt": "2022-05-02T08:16:24.53",
                    "environment": "Production",
                    "id": "AVEB09D80A585841399F",
                    "modifiedDt": "2023-08-28T13:42:42.947",
                    "value": "{\n  \"nodes\": [\n    {\n      \"name\": \"FirstName\",\n      \"source\": \"firstName\"\n    },\n    {\n      \"name\": \"LastName\",\n      \"source\": \"lastName\"\n    },\n    {\n      \"name\": \"Email\",\n      \"source\": \"email\"\n    },\n    {\n      \"name\": \"phoneNumber\",\n      \"source\": \"phoneNumbers.home\",\n      \"defaultValue\": \"555-555-5555\"\n    },\n    {\n      \"name\": \"ZipCode\",\n      \"source\": \"geography.postalCode\",\n      \"defaultValue\": \"55555\"\n    },\n    {\n      \"name\": \"Source\",\n      \"objectName\": \"Constant\",\n      \"defaultValue\": \"CareerBuilder\"\n    },\n    {\n      \"name\": \"JobId\",\n      \"source\": \"documents.requisition.requisitionId\"\n    },\n    {\n      \"name\": \"IsApplyWithIndeed\",\n      \"objectName\": \"Constant\",\n      \"defaultValue\": \"false\"\n    },\n    {\n      \"name\": \"Documents\",\n      \"nodes\": [\n        {\n          \"name\": \"ContentType\",\n          \"source\": \"documents.resume.resumeMimeType\"\n        },\n        {\n          \"name\": \"Name\",\n          \"source\": \"documents.resume.fileName\"\n        },\n        {\n          \"name\": \"Content\",\n          \"source\": \"documents.resume.document\"\n        }\n      ]\n    },\n    {\n      \"name\": \"Experiences\",\n      \"nodes\": [\n        {\n          \"name\": \"StartDate\",\n          \"nodes\": [\n            {\n              \"name\": \"Date\",\n              \"source\": \"endDate\",\n              \"type\": \"date|MM/DD/YYYY h:mm:ss A\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Description\",\n          \"source\": \"description\"\n        },\n        {\n          \"name\": \"AccountName\",\n          \"source\": \"company\"\n        },\n        {\n          \"name\": \"EndDate\",\n          \"nodes\": [\n            {\n              \"name\": \"Date\",\n              \"source\": \"endDate\",\n              \"type\": \"date|MM/DD/YYYY h:mm:ss A\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Location\",\n          \"nodes\": [\n            {\n              \"name\": \"FormattedAddress\",\n              \"source\": \"geography.address\"\n            }\n          ]\n        },\n        {\n          \"name\": \"Title\",\n          \"source\": \"jobTitle\"\n        }\n      ],\n      \"renderAs\": \"List\",\n      \"source\": \"documents.workHistory.histories\"\n    }\n  ]\n}"
                },
                {
                    "configuration": "",
                    "default": "False",
                    "fieldId": "DF0068X6Y24VLWFZK7NZ",
                    "group": "Push Config",
                    "help": "By default is No, If select Yes, then mapping defined in candidate payload mapping file will not be effective any more",
                    "label": "Use Custom Candidate Mapping File",
                    "name": "pushConfig.useCustomCandidateMappingFile",
                    "order": 9,
                    "placeholder": "",
                    "required": false,
                    "sensitive": false,
                    "type": "Boolean",
                    "visible": true,
                    "createdDt": "2022-06-21T12:04:36.607",
                    "environment": "Production",
                    "id": "AVD828K757FM28PNG7KG",
                    "modifiedDt": "2023-08-28T13:42:42.963",
                    "value": ""
                },
                {
                    "configuration": "",
                    "default": "",
                    "fieldId": "DF0005Z6HCK3SF2ML3ZR",
                    "group": "Push Config",
                    "help": "",
                    "label": "Custom Candidate Mapping File",
                    "name": "pushConfig.customCandidateMappingFile",
                    "order": 10,
                    "placeholder": "",
                    "required": false,
                    "sensitive": false,
                    "type": "Object",
                    "visible": true,
                    "createdDt": "2022-06-21T12:04:36.607",
                    "environment": "Production",
                    "id": "AVD80C36SDJW8Z2WKSSJ",
                    "modifiedDt": "2023-08-28T13:42:42.963",
                    "value": "{\"nodes\":[{\"name\":\"FirstName\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.FirstName\",\"accesor\":\"FirstName\",\"$$hashKey\":\"object:37409\"},{\"name\":\"LastName\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.LastName\",\"accesor\":\"LastName\",\"$$hashKey\":\"object:37411\"},{\"name\":\"Email\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.EmailAddress\",\"accesor\":\"EmailAddress\",\"$$hashKey\":\"object:37408\"},{\"name\":\"phoneNumber\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.Phone\",\"accesor\":\"Phone\",\"$$hashKey\":\"object:37523\",\"defaultValue\":\"555-555-5555\"},{\"name\":\"ZipCode\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.ZipCode\",\"accesor\":\"ZipCode\",\"$$hashKey\":\"object:37524\",\"defaultValue\":\"55555\"},{\"name\":\"Experiences\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[{\"name\":\"AccountName\",\"objectName\":\"ExtendedData.Candidate.CompanyExperiences\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.CompanyExperiences.CompanyName\",\"accesor\":\"CompanyName\",\"$$hashKey\":\"object:37571\"},{\"name\":\"Title\",\"objectName\":\"ExtendedData.Candidate.CompanyExperiences\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.CompanyExperiences.JobTitle\",\"accesor\":\"JobTitle\",\"$$hashKey\":\"object:37572\"},{\"name\":\"StartDate\",\"nodes\":[{\"id\":null,\"name\":\"Date\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate.CompanyExperiences\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:4622\",\"source\":\"ExtendedData.Candidate.CompanyExperiences.EndDate\",\"accesor\":\"EndDate\"}],\"editing\":false,\"renderAs\":\"Node\",\"$$hashKey\":\"object:37573\"},{\"id\":null,\"name\":\"EndDate\",\"editing\":false,\"renderAs\":\"Node\",\"nodes\":[{\"id\":null,\"name\":\"Date\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate.CompanyExperiences\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:4442\",\"source\":\"ExtendedData.Candidate.CompanyExperiences.EndDate\",\"accesor\":\"EndDate\"}],\"$$hashKey\":\"object:64975\"},{\"id\":null,\"name\":\"Location\",\"editing\":false,\"renderAs\":\"Node\",\"nodes\":[{\"id\":null,\"name\":\"FormattedAddress\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:66701\",\"source\":\"ExtendedData.Candidate.Address\",\"accesor\":\"Address\"}],\"$$hashKey\":\"object:66303\"},{\"id\":null,\"name\":\"Description\",\"editing\":false,\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:66312\"}],\"editing\":false,\"renderAs\":\"List\",\"source\":\"ExtendedData.Candidate.CompanyExperiences\",\"accesor\":\"CompanyExperiences\",\"$$hashKey\":\"object:37418\"},{\"name\":\"JobId\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.JobID\",\"accesor\":\"JobID\",\"$$hashKey\":\"object:37412\"},{\"id\":null,\"name\":\"Source\",\"editing\":false,\"objectName\":\"Constant\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:67250\",\"defaultValue\":\"CareerBuilder\"},{\"name\":\"Documents\",\"nodes\":[{\"id\":null,\"name\":\"Name\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:64343\",\"source\":\"ExtendedData.Candidate.ResumeFile.FileName\",\"accesor\":\"ResumeFile.FileName\"},{\"id\":null,\"name\":\"ContentType\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate\",\"source\":\"ExtendedData.Candidate.ResumeFile.MIMEType\",\"accesor\":\"ResumeFile.MIMEType\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:64352\"},{\"name\":\"Content\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.ResumeFile.Base64Stream\",\"accesor\":\"ResumeFile.Base64Stream\",\"$$hashKey\":\"object:37553\"}],\"editing\":false,\"renderAs\":\"Node\",\"$$hashKey\":\"object:37416\"},{\"id\":null,\"name\":\"IsApplyWithIndeed\",\"editing\":false,\"objectName\":\"Constant\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:67518\",\"defaultValue\":\"false\"}],\"isList\":true}"
                }
            ],
            "Dogfood": [
                {
                    "configuration": "",
                    "default": "CareerBuilder",
                    "fieldId": "DF008DW719BF74GV36H2",
                    "group": "Dogfood",
                    "help": "this field is requiered for dogfood request",
                    "label": "Dogfood Source",
                    "name": "Source",
                    "order": 11,
                    "placeholder": "CareerBuilder",
                    "required": true,
                    "sensitive": false,
                    "type": "String",
                    "visible": true,
                    "createdDt": "2022-05-02T08:16:24.53",
                    "environment": "Production",
                    "id": "AV34A97510C8FD46D6B3",
                    "modifiedDt": "2023-08-28T13:42:42.98",
                    "value": "CareerBuilder"
                }
            ]
        },
        "deliveryMethodId": "DW008CC5WD5XJP7Z5XGW",
        "displayName": "AdeccoStaffing_Applications",
        "atsName": "Homegrown",
        "logicType": "Standard",
        "duplicateExpireDate": "2119-09-08T16:53:00",
        "duplicateWindow": 0,
        "duplicateWindowType": "days",
        "entityMarkerDate": "2023-12-13T07:56:32.48",
        "environment": "Production",
        "MsgTemplate": {
            "TemplateHeaderBlob": "",
            "TemplateFooterBlob": "",
            "TemplateBlob": "{\"nodes\":[{\"name\":\"FirstName\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.FirstName\",\"accesor\":\"FirstName\",\"$$hashKey\":\"object:37409\"},{\"name\":\"LastName\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.LastName\",\"accesor\":\"LastName\",\"$$hashKey\":\"object:37411\"},{\"name\":\"Email\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.EmailAddress\",\"accesor\":\"EmailAddress\",\"$$hashKey\":\"object:37408\"},{\"name\":\"phoneNumber\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.Phone\",\"accesor\":\"Phone\",\"$$hashKey\":\"object:37523\",\"defaultValue\":\"555-555-5555\"},{\"name\":\"ZipCode\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.ZipCode\",\"accesor\":\"ZipCode\",\"$$hashKey\":\"object:37524\",\"defaultValue\":\"55555\"},{\"name\":\"Experiences\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[{\"name\":\"AccountName\",\"objectName\":\"ExtendedData.Candidate.CompanyExperiences\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.CompanyExperiences.CompanyName\",\"accesor\":\"CompanyName\",\"$$hashKey\":\"object:37571\"},{\"name\":\"Title\",\"objectName\":\"ExtendedData.Candidate.CompanyExperiences\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.CompanyExperiences.JobTitle\",\"accesor\":\"JobTitle\",\"$$hashKey\":\"object:37572\"},{\"name\":\"StartDate\",\"nodes\":[{\"id\":null,\"name\":\"Date\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate.CompanyExperiences\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:4622\",\"source\":\"ExtendedData.Candidate.CompanyExperiences.EndDate\",\"accesor\":\"EndDate\"}],\"editing\":false,\"renderAs\":\"Node\",\"$$hashKey\":\"object:37573\"},{\"id\":null,\"name\":\"EndDate\",\"editing\":false,\"renderAs\":\"Node\",\"nodes\":[{\"id\":null,\"name\":\"Date\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate.CompanyExperiences\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:4442\",\"source\":\"ExtendedData.Candidate.CompanyExperiences.EndDate\",\"accesor\":\"EndDate\"}],\"$$hashKey\":\"object:64975\"},{\"id\":null,\"name\":\"Location\",\"editing\":false,\"renderAs\":\"Node\",\"nodes\":[{\"id\":null,\"name\":\"FormattedAddress\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:66701\",\"source\":\"ExtendedData.Candidate.Address\",\"accesor\":\"Address\"}],\"$$hashKey\":\"object:66303\"},{\"id\":null,\"name\":\"Description\",\"editing\":false,\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:66312\"}],\"editing\":false,\"renderAs\":\"List\",\"source\":\"ExtendedData.Candidate.CompanyExperiences\",\"accesor\":\"CompanyExperiences\",\"$$hashKey\":\"object:37418\"},{\"name\":\"JobId\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.JobID\",\"accesor\":\"JobID\",\"$$hashKey\":\"object:37412\"},{\"id\":null,\"name\":\"Source\",\"editing\":false,\"objectName\":\"Constant\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:67250\",\"defaultValue\":\"CareerBuilder\"},{\"name\":\"Documents\",\"nodes\":[{\"id\":null,\"name\":\"Name\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:64343\",\"source\":\"ExtendedData.Candidate.ResumeFile.FileName\",\"accesor\":\"ResumeFile.FileName\"},{\"id\":null,\"name\":\"ContentType\",\"editing\":false,\"objectName\":\"ExtendedData.Candidate\",\"source\":\"ExtendedData.Candidate.ResumeFile.MIMEType\",\"accesor\":\"ResumeFile.MIMEType\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:64352\"},{\"name\":\"Content\",\"objectName\":\"ExtendedData.Candidate\",\"nodes\":[],\"editing\":false,\"renderAs\":\"Node\",\"source\":\"ExtendedData.Candidate.ResumeFile.Base64Stream\",\"accesor\":\"ResumeFile.Base64Stream\",\"$$hashKey\":\"object:37553\"}],\"editing\":false,\"renderAs\":\"Node\",\"$$hashKey\":\"object:37416\"},{\"id\":null,\"name\":\"IsApplyWithIndeed\",\"editing\":false,\"objectName\":\"Constant\",\"renderAs\":\"Node\",\"nodes\":[],\"$$hashKey\":\"object:67518\",\"defaultValue\":\"false\"}],\"isList\":true}",
            "AppLinkDID": "SC0010079HHTPQ3ZMBPD",
            "ContentType": "json",
            "DID": "SC004WG62XF0M1NQ7XF3",
            "CreatedDT": "2019-09-20T16:17:40.223",
            "ModifiedDT": "2023-08-28T13:42:42.9",
            "IsDeleted": false
        },
        "hasMessageTemplate": true,
        "lastRunDt": "2023-12-13T08:01:58.403",
        "modifiedDt": "2023-12-13T08:01:58.403",
        "postFilters": [
            {
                "comparison": "In",
                "createdDt": "2021-02-25T08:35:41.02",
                "field": "Candidate.IA_Job.Elements.UserEmail.Value",
                "id": "PF2Z2CD5Z1ZZZGYDGGJT",
                "objectType": "extended",
                "operand": "And",
                "orderIndex": 0,
                "value": "bulkposterUStest@adeccona.com,bulkposter.US@ModisRetail.com,Bulkposter.US@Entegee.com,bulkposter_US@PDSTech.com"
            }
        ],
        "rsaDefinition": null,
        "processorTemplate": "PT003H470NV5P7Z5LMD3",
        "runType": "PARALLEL-RT",
        "throttleCount": 1,
        "useClientProduction": true,
        "enableScreeners": "false",
        "enableEEOGender": "false",
        "enableEEORace": "false",
        "enableEEOVeteran": "false",
        "enableEEODisability": "false",
        "createdBy": "",
        "modifiedBy": "Joe.Kuhs@careerbuilder.com"
      }`);
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
      this.jsonTemplateBuilder.init();
      // this.textTemplateBuilder.init();
      // this.openApiTemplateBuilder.init();
    }
  }

  getOutputType(): void {
    const selectOption = this.messageTemplateBuilder.findTemplate(this.template.outputTypeName);
    this.template.outputType = selectOption;
  }
}

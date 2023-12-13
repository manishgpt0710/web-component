import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonEditorComponent } from './json-editor/json-editor.component';
import { NodeRendererComponent } from './node-renderer/node-renderer.component';
import { NodeEditorComponent } from './node-editor/node-editor.component';
import { NodeEditorJsonComponent } from './node-editor-json/node-editor-json.component';
import { SourceFieldPickerComponent } from './source-field-picker/source-field-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonEditorComponent,
    NodeRendererComponent,
    NodeEditorComponent,
    NodeEditorJsonComponent,
    SourceFieldPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

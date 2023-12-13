import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeEditorJosnComponent } from './node-editor-json.component';

describe('NodeEditorJosnComponent', () => {
  let component: NodeEditorJosnComponent;
  let fixture: ComponentFixture<NodeEditorJosnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeEditorJosnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeEditorJosnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  newNote: string = '';

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  addNote(): void {
    if (this.newNote.trim() !== '') {
      this.noteService.addNote(this.newNote);
      this.newNote = '';
    }
  }
}

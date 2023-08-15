import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: string[] = [];

  addNote(note: string): void {
    this.notes.push(note);
  }

  getNotes(): string[] {
    return this.notes;
  }

  deleteNote(index: number): void {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    }
  }
}

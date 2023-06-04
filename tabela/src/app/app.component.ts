import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText = '';
  items = [
    { name: 'João', email: 'joao@example.com', phone: '(11) 1234-5678' },
    { name: 'Maria', email: 'maria@example.com', phone: '(11) 8765-4321' },
    { name: 'Carlos', email: 'carlos@example.com', phone: '(11) 4567-8901' }
  ];

  get filteredItems() {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.phone.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchText = '';
  items = [
    { name: 'João', email: 'joao@example.com', phone: '(11) 1234-5678' },
    { name: 'Maria', email: 'maria@example.com', phone: '(11) 8765-4321' },
    { name: 'Carlos', email: 'carlos@example.com', phone: '(11) 4567-8901' }
  ];

  ngOnInit() {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const table = document.getElementById('table');

    searchInput.addEventListener('keyup', () => {
      const filter = searchInput.value.toLowerCase();
      const rows = table.getElementsByTagName('tr');

      for (let i = 1; i < rows.length; i++) {
        const name = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
        const email = rows[i].getElementsByTagName('td')[1].textContent.toLowerCase();
        const phone = rows[i].getElementsByTagName('td')[2].textContent.toLowerCase();

        if (name.includes(filter) || email.includes(filter) || phone.includes(filter)) {
          rows[i].style.display = '';
        } else {
          rows[i].style.display = 'none';
        }
      }
    });
  }
}

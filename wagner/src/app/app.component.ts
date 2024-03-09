import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableModule, ButtonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products = [];
  apiUrl = "http://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<[]>(this.apiUrl);
  }

  ngOnInit(): void {
    this.get().subscribe(f => {
      this.products = f;
    });

    console.log(this.products);
  }
}

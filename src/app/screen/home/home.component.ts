import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Comics } from 'src/app/models/comics';
import { CategoryService } from 'src/app/service/category.service';
import { ComicsService } from 'src/app/service/comics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comics: Comics[] = [];
  cates: Category[] = [];

  constructor(private ComicService: ComicsService, private CategoryService: CategoryService) {

  }

  ngOnInit(): void {
    // Lấy tất cả dữ liệu trong comic
    this.ComicService.getAll().subscribe(data =>{
          console.log(data);
          this.comics = data;
    }),
    // Lấy tất cả dữ liệu có trong category
    this.CategoryService.getAll().subscribe(data =>{
      console.log(data);
      this.cates = data;
    })
  }
}

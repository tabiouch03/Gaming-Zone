import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/new.service';
import { News } from '../../model/news.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news = [];

  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    })
  }
}

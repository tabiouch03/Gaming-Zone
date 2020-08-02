import { Injectable } from '@angular/core';
import { News } from '../model/news.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // API URL
  private REST_API_SERVER = 'http://127.0.0.1:8000/news/';
  private REST_API_SERVER_NEWS_DETAIL = 'http://127.0.0.1:8000/news-detail/';

  constructor(private http: HttpClient) { }

  // Get All Games
  getNews() {
    return this.http.get<News[]>(this.REST_API_SERVER);
  }
  // Get Game By ID
  getGameById(id: string) {
    return this.http.get<News>(this.REST_API_SERVER_NEWS_DETAIL + id);
  }
  // Create Game
  createGame(data: News) {
    return this.http.post<News>(this.REST_API_SERVER, data)
  }
  // Update Game
  updateGame(data: News, id: string) {
    return this.http.put<News>(this.REST_API_SERVER_NEWS_DETAIL + id, data);
  }
  // Delete Game
  deleteGame(id: string) {
    return this.http.delete<News>(this.REST_API_SERVER_NEWS_DETAIL + id);
  }
}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class BooksService {
  private readonly apiUrl = 'https://openlibrary.org/search.json';

  constructor(private readonly httpService: HttpService) {}

  async searchBooks(query: string, limit = 10): Promise<any> {
    try {
      const { data } = await this.httpService.get(this.apiUrl, {
        params: { q: query, limit },
      }).toPromise();
      return data;
    } catch (error) {
      throw new Error('Error fetching books from Open Library');
    }
  }
}

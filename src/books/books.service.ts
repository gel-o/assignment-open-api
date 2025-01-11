import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BooksService {
  private readonly apiUrl = 'https://openlibrary.org/search.json';

  constructor(private readonly httpService: HttpService) {}

  async searchBooks(query: string, limit = 10): Promise<any> {
    try {
      // Use `firstValueFrom` to handle Observables in newer NestJS versions
      const response = await firstValueFrom(
        this.httpService.get(this.apiUrl, {
          params: { q: query, limit },
        }),
      );
      return response.data;
    } catch (error) {
      throw new Error('Error fetching books from Open Library');
    }
  }
}

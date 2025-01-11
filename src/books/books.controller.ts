import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('search')
  async searchBooks(@Query('q') query: string, @Query('limit') limit: number) {
    if (!query) {
      return { error: 'Query parameter "q" is required' };
    }
    return this.booksService.searchBooks(query, limit);
  }
}

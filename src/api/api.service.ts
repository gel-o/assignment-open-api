import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  async fetchData(): Promise<any> {
    const url = 'https://api.example.com/data'; // Replace with actual API endpoint
    const headers = {
      'Authorization': 'Bearer YOUR_API_KEY', // Replace with actual header if needed
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, { headers })
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  }
}

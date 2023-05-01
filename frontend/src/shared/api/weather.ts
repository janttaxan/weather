import { APIService } from 'shared/api/api-service';

export class WeatherService extends APIService {
  public async fetchCurrentWeatherByCoordinates(latitude: number, longitude: number) {
    const response = await this.execute('/v2/weather/current/', 'GET', {
      params: { latitude, longitude }
    });
    console.log('response.data', response.data);
    return response.data;
  }

  public async fetchCurrentWeatherById() {
    const response = await this.execute('');
    console.log('response.data', response.data);
    return response.data;
  }
}

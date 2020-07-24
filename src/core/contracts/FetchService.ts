export interface FetchService {
  getJson<T>(): Promise<T>
}
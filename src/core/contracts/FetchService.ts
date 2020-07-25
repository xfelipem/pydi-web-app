export interface FetchService {
  getJson<T>(): Promise<T>
  post(props:any): Promise<void>;
}
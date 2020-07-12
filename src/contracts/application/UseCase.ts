export interface QueryUseCase<T> {
  execute: (onFetch: (requested: T) => void) => T | Promise<T>;
}

export interface UseCase<T> {
  execute: (onFetch: (requested: T) => void) => Promise<void>;
}

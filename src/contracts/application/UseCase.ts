export interface UseCase<T> {
  execute: (onSuccess: (requested: T) => void) => Promise<void>;
}

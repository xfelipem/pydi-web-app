import { ReactApplication } from './ReactApplication';
import { ReactRouter } from './ReactRouter';

const router = new ReactRouter();

export const application = new ReactApplication(router);

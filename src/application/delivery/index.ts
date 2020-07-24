import { ReactApplication } from './web';
import { ReactRouter } from './web/ReactRouter';

const reactRouter = new ReactRouter();

export const webApplication = new ReactApplication(reactRouter);

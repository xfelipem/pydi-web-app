import { ReactApplication } from './infrastructure/ReactApplication';
import { ReactRouter } from './infrastructure/ReactRouter';
import { webRoutes } from './view/pages/routes';

const reactRouter = new ReactRouter(webRoutes);

export const webApplication = new ReactApplication(reactRouter);

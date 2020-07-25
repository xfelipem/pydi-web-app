import { ReactApplication } from './web';
import { ReactRouter } from './web/infrastructure/ReactRouter';
import { webRoutes } from './web/view/pages/routes';

const reactRouter = new ReactRouter(webRoutes);

export const webApplication = new ReactApplication(reactRouter);

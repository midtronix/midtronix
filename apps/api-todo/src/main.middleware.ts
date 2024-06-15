import { RequestHandler } from '@nestjs/common/interfaces';
import helmet from 'helmet';
import { join } from 'path';
import favicon from 'serve-favicon';

export const Middlewares: RequestHandler[] = [
  (req, res, next) => {
    console.log('Test Middle Ware');
    return next();
  },
  helmet(),
  favicon(join(__dirname, 'favicon.ico')),
];

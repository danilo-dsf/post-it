import { container } from 'tsyringe';
import mailConfig from '@config/mail';
import IMailProvider from './models/IMailProvider';
import EtherealMailProvider from './implementations/EtherealMailProvider';

container.registerSingleton<IMailProvider>(
  'MailProvider',
  EtherealMailProvider,
);

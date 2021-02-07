import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import IUsersRepository from '../repositories/IUsersRepository';
import IUserTokensRepository from '../repositories/IUserTokensRepository';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[POST-IT] Recuperação de senha',
      text: `
        Olá ${user.name},

        Se você solicitou a recuperação da sua senha, acesse:

        ${process.env.APP_WEB_URL}/reset-password?token=${token}
        Lembrete: caso não faça a recuperação de senha nas próximas duas horas, o link será invalidado.

        Caso não tenha solicitado, apenas ignore este e-mail.

        Atenciosamente,

        Equipe POST-IT!
      `,
    });
  }
}

export default SendForgotPasswordEmailService;

import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8d515a7f7b057a",
    pass: "a401636dbe13b4"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {  
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Matheus Moreira <matheus.mor.almeida@gmail.com>',
      subject,
      html:body,
    });
  };
}
import nodemailer from "nodemailer";
import "dotenv/config";

import { EmailPayload } from "../types/interfaces.js";

interface UkrNetNodemailerConfig {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    }
}

const { UKR_NET_PASSWORD, UKR_NET_EMAIL } = process.env;

if (!UKR_NET_PASSWORD) {
  throw new Error("UKR_NET_PASSWORD not deefine in environment variables");
}

if (!UKR_NET_EMAIL) {
  throw new Error("v not deefine in environment variables");
}

const nodemailerConfig: UkrNetNodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = (payload: EmailPayload) => {
  const email = { ...payload, from: UKR_NET_EMAIL };
  return transport.sendMail(email);
};

export default sendEmail;

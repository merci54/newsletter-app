import emailjs from '@emailjs/browser';

export interface SendEmailParams extends Record<string, unknown> {
 email: string;

}

export const sendEmail = (params: SendEmailParams) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    params,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

import { z } from "zod";

export interface ContactMessageFormMessages {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
}

export function buildContactMessageSchema(
  messages: ContactMessageFormMessages,
) {
  return z.object({
    name: z.string().trim().min(1, messages.nameRequired),
    email: z
      .string()
      .trim()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    comment: z.string().trim().optional(),
  });
}

export type ContactMessageFormValues = z.infer<
  ReturnType<typeof buildContactMessageSchema>
>;

export const CONTACT_MESSAGE_DEFAULT_VALUES: ContactMessageFormValues = {
  name: "",
  email: "",
  comment: "",
};

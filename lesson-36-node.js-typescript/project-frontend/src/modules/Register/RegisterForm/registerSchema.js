import * as Yup from "yup";

import { passwordSchema, emailSchema } from "../../../shared/utils/validation";

const loginSchema = Yup.object({
    username: Yup.string().trim().required(),
    email: emailSchema,
    password: passwordSchema,
});

export default loginSchema;
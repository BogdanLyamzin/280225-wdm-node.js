import * as Yup from "yup";

import { emailSchema } from "../../../shared/utils/validation";

const resetPasswordSchema = Yup.object({
    email: emailSchema,
});

export default resetPasswordSchema;
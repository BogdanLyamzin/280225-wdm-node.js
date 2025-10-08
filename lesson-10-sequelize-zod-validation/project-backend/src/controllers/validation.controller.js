import * as rules from "../constants/validation.js";

export const getValidationRulesController = (req, res)=> {
    res.json(rules);
}
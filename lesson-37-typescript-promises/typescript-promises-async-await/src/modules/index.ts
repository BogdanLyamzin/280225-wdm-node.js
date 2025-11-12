// import {getDiagnosisBaseWeightIndex} from "./medic-functions.ts";
// import {getDiagnosisBaseWeightIndex as getDiasgonsis} from "./medic-functions.ts";
import * as medicFunctions from "./medic-functions.ts";
/*
import {getDiagnosisBaseWeightIndex, calcWeightIndex} from  "./medic-functions.ts";
const nedicFunctions = {
    getDiagnosisBaseWeightIndex,
    calcWeightIndex,
}
*/
import AdminClass from "./Admin.ts";

console.log(medicFunctions.getDiagnosisBaseWeightIndex(1.9, 90));
const admin = new AdminClass("bhliamzin", "bohdan@gmail.com", "123456");
console.log(admin);
console.log(admin.checkPassword("1234567"))


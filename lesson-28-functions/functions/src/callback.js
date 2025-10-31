const student = {
    name: "Bohdan",
    lastName: "Liamzin",
    scores: [1, 2, 3, 1, 1],
    filterScores(callback) {
        const result = [];
        for(const score of this.scores) {
            const ok = callback(score);
            if(ok) result.push(score);
        }
        return result;
    },
    mapScores(callback) {
        const result = [];
        for(const score of this.scores) {
            const transformScore = callback(score);
            result.push(transformScore);
        }
        return result;
    }
    // getHighScores() {
    //     const result = [];
    //     for(const score of this.scores) {
    //         if(score <= 2) {
    //             result.push(score);
    //         }
    //     }
    //     return result;
    // },
    // getLowerScores() {
    //     const result = [];
    //     for(const score of this.scores) {
    //         if(score > 2) {
    //             result.push(score);
    //         }
    //     }
    //     return result;
    // },
    // getScoresConvertToUkraine() {
    //     const result = [];
    //     for(const score of this.scores) {
    //        result.push(13 - score);
    //     }
    //     return result;
    // }
}

// const studentHightScores = student.getHighScores();
// console.log(studentHightScores);
// const studentLowerScores = student.getLowerScores();
// console.log(studentLowerScores);
// const studentUkraineScore = student.getScoresConvertToUkraine();
// console.log(studentUkraineScore);
const studentHightScores = student.filterScores((score)=> score <= 2);
console.log(studentHightScores);
// const func = (score)=> score <= 2;
// const studentHightScores = student.filterScore(func);
const studentLowerScores = student.filterScores((score) => score > 2);
console.log(studentLowerScores);
const studentUkraineScore = student.mapScores(score => 13 - score);
console.log(studentUkraineScore);

const sallaries = [3000, 5000, 2000, 2500];
// const highSallaries = sallaries.filter(sallary => sallary >= 3000);
// sallaries.filter(callback) {
//     const result = [];
//         for(let i = 0; i < sallaries.length; i++) {
//             const item = sallaries[i];
//             const ok = callback(item, i, sallaries);
//             if(ok) result.push(item);
//         }
//     return result;
// }
// const sallariesInUsd = sallaries.map(sallary => sallary * 1.16);
// sallaries.map(callback) {
//     const result = [];
//         for(let i = 0; i < sallaries.length; i++) {
//             const item = sallaries[i];
//             const transformItem = callback(item, i, sallaries);
//             result.push(transformItem);
//         }
//     return result;
// }
// const sallariesSum = sallaries.reduce((acum, sallary) => acum + sallary, 0);
// sallaries.reduce(callback, startValue) {
//     let result = startValue;
//         for(let i = 0; i < sallaries.length; i++) {
//             const item = sallaries[i];
//             result = callback(result, item, i, sallaries);
//         }
//     return result;
// }
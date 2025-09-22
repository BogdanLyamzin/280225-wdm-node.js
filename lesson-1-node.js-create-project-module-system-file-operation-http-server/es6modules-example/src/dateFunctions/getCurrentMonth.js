const getCurrentMonth = ()=> {
    const date = new Date();
    return date.getMonth() + 1;
}

export default getCurrentMonth;
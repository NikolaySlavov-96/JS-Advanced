function previousDay(year , month , day){

    let previouDay = new Date(year , (month - 1) , day);

    previouDay.setDate(previouDay.getDate() - 1);

    console.log(`${previouDay.getFullYear()}-${previouDay.getMonth() + 1}-${previouDay.getDate()}`)
}

previousDay(2016, 9, 30)
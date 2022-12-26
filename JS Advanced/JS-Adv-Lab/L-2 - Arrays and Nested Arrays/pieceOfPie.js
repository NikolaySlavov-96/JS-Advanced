function pieceOfPie(arrayOfPie , begin , end){

    let beginIndex = arrayOfPie.indexOf(begin);
    let endIndex = arrayOfPie.indexOf(end);

    let results = arrayOfPie.slice(beginIndex , (endIndex + 1));

    return results;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')
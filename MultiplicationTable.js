function printMultiplicationTable(tableOf, tableTill) {
    console.log(tableOf, tableTill);

    for(let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${i * tableOf}`);
    }
}
printMultiplicationTable(4, 10);
printMultiplicationTable(1, 5);
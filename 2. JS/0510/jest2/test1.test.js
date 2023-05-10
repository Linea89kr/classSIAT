const shoppingList =[
    'banana',
    'milk',
    'soy sauce',
    'mushrooms',
    'Ramen',
    'chives'
];

test("check milk is in the list", () => {
    //배열 안에 해당 내용이 포함되어 있으면 pass
    expect(shoppingList).toContain('milk');
    //length 확인
    expect(shoppingList.length).toBe(6);
    //이터러블 개체 확인
    expect(new Set(shoppingList)).toContain('Ramen');
})
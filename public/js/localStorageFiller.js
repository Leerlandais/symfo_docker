

for(let i = 1; i <= 12; i++) {
    const item = {id: i, sold: 0};
    localStorage.setItem('ITEM'+i, JSON.stringify(item));
}
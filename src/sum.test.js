const soma = require ('./sum')

test('soma entre 5 + 5 = 10', () =>{
    expect(soma(5, 5)).toBe(10)
    
})
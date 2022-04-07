let salario = 3002.00;

if (salario <= 2000.00)
{
    console.log("Isento");
}

else if(salario >= 2000.01 && salario <= 3000.00)
{
    salario = ((salario - 2000.00) * 0.08);
    console.log("R$ " + salario.toFixed(2));
}

else if (salario >= 3000.01 && salario <= 4500.00)
{
    salario = ((salario  - 3000.00) * 0.18 + 1000.00 * 0.008);
    console.log("R$" + salario.toFixed(2));
}

else if(salario >= 4500.01)
{
    salario = ((salario - 4500.01)*0.28 + 1500.00*0.18 + 1000.00*0.08);
    console.log("R$" + salario.toFixed(2));
}
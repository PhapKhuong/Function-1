function isPrime(number)
    {
        let mod;
        for (let i = 2; i < number; i++)
            {
                mod = number % i;
                if (!mod) break;                
            }
        if (mod > 0) return true;
    };

function showPrime()
    {
        let resultStr = "2; ";
        for (let i = 3; i < 10000; i++)
            {
                if (isPrime(i)) resultStr += i + "; ";
            };
        document.getElementById("result").innerHTML = "Các số nguyên tố nhỏ hơn 10.000 là:" + "<br>" + resultStr;   
    };
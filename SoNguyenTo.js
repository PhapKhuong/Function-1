function isPrime(number)
    {
        let mod;
        for (i = 2; i < number; i++)
            {
                mod = number % i;
                if (!mod) break;                
            }
        if (mod > 0) return true;
    };

function showPrime()
    {
        let resultStr = "2; ";
        for (x = 3; x < 10000; x++)
            {
                if (isPrime(x)) resultStr += x + "; ";
            };
        document.getElementById("result").innerHTML = "Các số nguyên tố nhỏ hơn 10.000 là:" + "<br>" + resultStr;   
    };
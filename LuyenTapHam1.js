function alertMessage()
    {
        alert ("Xin chào!");
    };



function add1ToNumber(num)
    {
        num++;
        return (num);
    };

function showNumber()
    {
        let x = +prompt("Nhập vào một số");
        document.getElementById("result2").innerText = "Số tăng thêm 1 so với số ban đầu là: " + add1ToNumber(x);
    };



function compare2Nums(num1, num2)
    {
        let total;
        if (num1 <= num2)
            {
                total = num1 + num2;
                return total;
            };
    };

function displayResult()
    {
        let n1 = +prompt("Nhập số thứ 1");
        let n2 = +prompt("Nhập số thứ 2");

        if (!compare2Nums(n1,n2)) document.getElementById("result3").innerText = "Số thứ nhất lớn hơn số thứ hai";
        else document.getElementById("result3").innerText = "Tổng của hai số là: " + compare2Nums(n1, n2);
    };



function addNumbers()
    {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }

function alertResult()
    {
        result = 0;
        alert ("Trước khi gọi hàm: " + result);
        result = addNumbers();
        alert ("Sau khi gọi hàm: " + result);
    }



function findConstellation(str)
    {
        let stars = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
        let constellations = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

        for (i = 1; i < stars.length; i++)
            {
                if (str === stars[i]) return constellations[i];
            };
    };

function showConstellation()
    {
        let inputStr = prompt("Nhập vào tên một ngôi sao");
        if (!findConstellation(inputStr)) document.getElementById("result5").innerText = "Không tìm thấy ngôi sao tương ứng.";
        else document.getElementById("result5").innerText = "Chòm sao chứa ngôi sao đó là: " + findConstellation(inputStr);
    };



function calculateSquare(number)
    {
        return number * number;
    };

function showSquare()
    {
        let n = +prompt ("Nhập vào một số");
        document.getElementById("result21").innerText = "Bình phương của " + n + " là: " + calculateSquare(n);
    };
    

function calculateArea(rad)
    {
        return 3.14 * rad * rad;
    };

function caculatePerimeter(rad)
    {
        return 2 * 3.14 * rad;
    }

function showAreaPerimeter()
    {
        let r = +prompt ("Nhập bán kính của hình tròn");
        document.getElementById("result221").innerHTML = "Diện tích hình tròn là: " + calculateArea(r) + "<br>";
        document.getElementById("result222").innerHTML = "Chu vi hình tròn là: " + caculatePerimeter(r);
    };
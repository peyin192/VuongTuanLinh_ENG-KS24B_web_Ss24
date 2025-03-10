let arr = [];
let choice;
do {
    choice = prompt(`Chọn chức năng:
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất
4. Tính tổng và trung bình số dương
5. Đảo ngược mảng
6. Kiểm tra đối xứng
7. Thoát`);
    
    switch (choice) {
        case "1":
            let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:");
            arr = input.split(",").map(Number);
            break;
        
        case "2":
            console.log("Mảng hiện tại:", arr);
            break;
        
        case "3":
            let max = Math.max(...arr);
            let indices = arr.map((num, index) => num === max ? index : -1).filter(index => index !== -1);
            console.log(`Phần tử lớn nhất: ${max}, tại vị trí: ${indices.join(", ")}`);
            break;
        
        case "4":
            let positiveNumbers = arr.filter(num => num > 0);
            let sum = positiveNumbers.reduce((sum, num) => sum + num, 0);
            let average = positiveNumbers.length > 0 ? sum / positiveNumbers.length : 0;
            console.log(`Tổng số dương: ${sum}, Trung bình: ${average}`);
            break;
        
        case "5":
            arr.reverse();
            console.log("Mảng sau khi đảo ngược:", arr);
            break;
        
        case "6":
            let isSymmetric = arr.join() === arr.slice().reverse().join();
            console.log(isSymmetric ? "Mảng đối xứng" : "Mảng không đối xứng");
            break;
        
        case "7":
            console.log("Thoát chương trình.");
            break;
        
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== "7");

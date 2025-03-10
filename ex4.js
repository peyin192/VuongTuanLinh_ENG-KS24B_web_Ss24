let arr = [];
let choice;
do {
    choice = prompt(`Chọn chức năng:
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử
4. Tìm phần tử lớn nhất và chỉ số của nó
5. Tính trung bình cộng của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát`);
    
    switch (choice) {
        case "1":
            let rows = parseInt(prompt("Nhập số hàng của mảng: "));
            let cols = parseInt(prompt("Nhập số cột của mảng: "));
            arr = [];
            for (let i = 0; i < rows; i++) {
                let row = prompt(`Nhập hàng ${i + 1}, cách nhau bởi dấu phẩy:`).split(",").map(Number);
                arr.push(row);
            }
            break;
        
        case "2":
            console.log("Mảng 2 chiều hiện tại:", arr);
            break;
        
        case "3":
            let totalSum = arr.flat().reduce((sum, num) => sum + num, 0);
            console.log("Tổng các phần tử trong mảng:", totalSum);
            break;
        
        case "4":
            let max = arr[0][0], maxRow = 0, maxCol = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        maxRow = i;
                        maxCol = j;
                    }
                }
            }
            console.log(`Phần tử lớn nhất: ${max}, tại vị trí: (${maxRow}, ${maxCol})`);
            break;
        
        case "5":
            let rowIndex = parseInt(prompt("Nhập chỉ số hàng muốn tính trung bình: "));
            if (rowIndex >= 0 && rowIndex < arr.length) {
                let rowAvg = arr[rowIndex].reduce((sum, num) => sum + num, 0) / arr[rowIndex].length;
                console.log(`Trung bình cộng hàng ${rowIndex}: ${rowAvg}`);
            } else {
                console.log("Chỉ số hàng không hợp lệ.");
            }
            break;
        
        case "6":
            arr = arr.reverse();
            console.log("Mảng sau khi đảo ngược hàng:", arr);
            break;
        
        case "7":
            console.log("Thoát chương trình.");
            break;
        
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== "7");

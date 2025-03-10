let arr = [];
let choice;
do {
    choice = prompt(`Chọn chức năng:
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng của một hàng hoặc một cột
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
            let mainDiagonalSum = 0;
            for (let i = 0; i < Math.min(arr.length, arr[0].length); i++) {
                mainDiagonalSum += arr[i][i];
            }
            console.log("Tổng đường chéo chính:", mainDiagonalSum);
            break;
        
        case "5":
            let secondaryDiagonalSum = 0;
            for (let i = 0; i < Math.min(arr.length, arr[0].length); i++) {
                secondaryDiagonalSum += arr[i][arr[i].length - 1 - i];
            }
            console.log("Tổng đường chéo phụ:", secondaryDiagonalSum);
            break;
        
        case "6":
            let type = prompt("Bạn muốn tính trung bình cộng của hàng (H) hay cột (C)?").toUpperCase();
            let index = parseInt(prompt("Nhập chỉ số hàng/cột: "));
            let avg;
            if (type === "H" && index >= 0 && index < arr.length) {
                avg = arr[index].reduce((sum, num) => sum + num, 0) / arr[index].length;
                console.log(`Trung bình cộng hàng ${index}: ${avg}`);
            } else if (type === "C" && index >= 0 && index < arr[0].length) {
                let colSum = 0, count = 0;
                for (let i = 0; i < arr.length; i++) {
                    colSum += arr[i][index];
                    count++;
                }
                avg = colSum / count;
                console.log(`Trung bình cộng cột ${index}: ${avg}`);
            } else {
                console.log("Chỉ số không hợp lệ.");
            }
            break;
        
        case "7":
            console.log("Thoát chương trình.");
            break;
        
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== "7");

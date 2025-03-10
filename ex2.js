let arr = [];

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "Menu thao tác trên mảng số nguyên\n" +
            "1. Nhập mảng số nguyên\n" +
            "2. Hiển thị mảng\n" +
            "3. Tìm các phần tử chẵn và lẻ\n" +
            "4. Tính trung bình cộng của mảng\n" +
            "5. Xóa phần tử tại vị trí chỉ định\n" +
            "6. Tìm phần tử lớn thứ hai trong mảng\n" +
            "7. Thoát chương trình\n" +
            "Chọn một số (1-7):"
        ));

        switch (choice) {
            case 1:
                let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy (,):");
                arr = input.split(",").map(Number);
                console.log("Mảng đã được nhập thành công!");
                break;
            
            case 2:
                if (arr.length === 0) {
                    console.log("Mảng đang rỗng! Vui lòng nhập mảng trước.");
                } else {
                    console.log("Mảng hiện tại:", arr);
                }
                break;
            
            case 3:
                let chan = arr.filter(num => num % 2 === 0);
                let le = arr.filter(num => num % 2 !== 0);
                console.log("Số chẵn:", chan);
                console.log("Số lẻ:", le);
                break;
            
            case 4:
                if (arr.length === 0) {
                    console.log("Mảng đang rỗng! Không thể tính trung bình.");
                } else {
                    let sum = arr.reduce((acc, num) => acc + num, 0);
                    let avg = sum / arr.length;
                    console.log("Trung bình cộng của mảng:", avg.toFixed(2));
                }
                break;
            
            case 5:
                let index = parseInt(prompt("Nhập vị trí cần xóa (bắt đầu từ 0):"));
                if (index >= 0 && index < arr.length) {
                    arr.splice(index, 1);
                    console.log("Phần tử đã được xóa. Mảng mới:", arr);
                } else {
                    console.log("Vị trí không hợp lệ!");
                }
                break;
            
            case 6:
                if (arr.length < 2) {
                    console.log("Mảng không đủ phần tử để tìm số lớn thứ hai!");
                } else {
                    let max = Math.max(...arr);
                    let filteredArr = arr.filter(num => num !== max);
                    let secondMax = Math.max(...filteredArr);
                    console.log("Số lớn thứ hai trong mảng là:", secondMax);
                }
                break;
            
            case 7:
                console.log("Thoát chương trình!");
                break;
            
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
        }
    } while (choice !== 7);
}

menu();

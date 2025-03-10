let str = "";
let choice;
do {
    choice = prompt(`Chọn chức năng:
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ khoảng trắng ở đầu và cuối
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi
6. Tìm kiếm và thay thế ký tự
7. Thoát`);
    
    switch (choice) {
        case "1":
            str = prompt("Nhập chuỗi: ");
            break;
        
        case "2":
            console.log("Chuỗi hiện tại:", str);
            break;
        
        case "3":
            str = str.trim();
            console.log("Chuỗi sau khi loại bỏ khoảng trắng:", str);
            break;
        
        case "4":
            let reversedStr = str.split('').reverse().join('');
            console.log("Chuỗi sau khi đảo ngược:", reversedStr);
            break;
        
        case "5":
            let wordCount = str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
            console.log("Số lượng từ trong chuỗi:", wordCount);
            break;
        
        case "6":
            let charToFind = prompt("Nhập ký tự cần tìm: ");
            if (str.includes(charToFind)) {
                let charToReplace = prompt("Nhập ký tự thay thế: ");
                let replacedStr = str.split(charToFind).join(charToReplace);
                console.log("Chuỗi sau khi thay thế:", replacedStr);
            } else {
                console.log("Không tìm thấy ký tự trong chuỗi.");
            }
            break;
        
        case "7":
            console.log("Thoát chương trình.");
            break;
        
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== "7");

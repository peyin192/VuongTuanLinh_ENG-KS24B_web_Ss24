let str = "";
let choice;
do {
    choice = prompt(`Chọn chức năng:
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi có đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa ký tự đầu tiên của từ
7. Thoát`);
    
    switch (choice) {
        case "1":
            str = prompt("Nhập chuỗi: ");
            break;
        
        case "2":
            console.log("Chuỗi hiện tại:", str);
            break;
        
        case "3":
            console.log("Độ dài của chuỗi:", str.length);
            break;
        
        case "4":
            let charToCount = prompt("Nhập ký tự cần đếm: ");
            let count = str.split(charToCount).length - 1;
            console.log(`Số lần xuất hiện của '${charToCount}': ${count}`);
            break;
        
        case "5":
            let reversedStr = str.split('').reverse().join('');
            console.log(reversedStr === str ? "Chuỗi đối xứng" : "Chuỗi không đối xứng");
            break;
        
        case "6":
            let capitalizedStr = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            console.log("Chuỗi sau khi chuyển đổi:", capitalizedStr);
            break;
        
        case "7":
            console.log("Thoát chương trình.");
            break;
        
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== "7");

let inputNumber = []
let choice
let n
let initialValue = 0
let count
console.log("=============================MENU============================")
console.log("1. Nhap mang")
console.log("2. Hien thi mang")
console.log("3. Tim phan tu lon nhat va nho nhat trong mang")
console.log("4. Tính tổng các phần tử trong mảng")
console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng")
console.log("6. Sắp xếp mảng tăng dần")
console.log("7. Thoát chương trình")
console.log("=============================================================")
do {
    choice = parseFloat(prompt("Nhap lua chon: "))
    switch (choice) {
        case 1: // nhap mang
            n = parseFloat(prompt("Nhap so phan tu can nhap"))
            for (let i = 0;i < n;i++) {
                inputNumber[i] = parseFloat(prompt(`Nhap phan tu thu ${i+1}`))
            }
            break
        case 2: // hien thi mang
            console.log(inputNumber)
            break
        case 3:
            console.log("Phan tu lon nhat la: " + " " + Math.max(...inputNumber));
            console.log("Phan tu nho nhat la: " + " " + Math.min(...inputNumber));
            break
        case 4:
            let Sum = inputNumber.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
            console.log(Sum);
            break
        case 5:
            let searchNumber = parseFloat(prompt("Nhap so"));
            for (let i = 0;i < n;i++) {
                if (searchNumber === inputNumber[i]) {
                    count++
                }
            }
            console.log(count);
            break
        case 6:
            let arrNew = inputNumber.sort()
            console.log(arrNew)
            break
        default:
            break
    }

} while (choice !== 0)
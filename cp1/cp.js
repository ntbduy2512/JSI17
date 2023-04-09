// Câu 1: Cho array m = [1,2,3,4,5,6,”hh”, “9”,80,100]. Hãy thực hiện xóa những phần tử không phải dạng number. Sau đó, tạo ra một array mới tên là mSquared thỏa mãn: mSquared[i] = pow(m[i],2).
const m = [1,2,3,4,5,6,"hh", "9",80,100]
const filNum = m.filter(Number).map(Number)
console.log(filNum);

const mSquared = filNum.map((filNum) => Math.pow(filNum,2))

console.log(mSquared)


// Câu 2: Thực hiện duyệt string sau đây: “ High knowledge, high return”. Chuyển đổi string về dạng array, xóa bỏ các phần tử có giá trị là “ “; và các phần tử có giá trị là chữ hoa chuyển thành chữ thường.
const string = "High knowledge, high return"

// Câu 3: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1.6.8.9.0]. Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
const arr1 = [1,2,4,5,6]
const arr2 = [1,6,8,9,0]
const arr3 = arr1.filter((arr1)=> arr2.includes(arr1))
console.log(arr3)
// Câu 4: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
const number = [1,54,6,7]
const newArr = number.map(num => num+5)
console.log(newArr)

// Cau 5: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.

const M = [1,2,3,4,5,6,7]
const N = [3,5,675,8,96]
const MN = [...M,...N].filter((MN)=> MN!=1&&MN!=8&&MN!=10&&MN!=96&&MN!=7);
console.log(MN)
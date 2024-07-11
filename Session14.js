// BÀI 1:

// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];
// let dem = 0;
// for (i = 0; i <= A.length - 1; i++) {
//   if (A[i] >= 10) {
//     dem = dem + 1;
//   }
// }
// console.log(dem);

// BÀI 2:
// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];
// let max = A[0];
// let vitri = 0;
// for (i = 1; i < A.length - 1; i++) {
//   if (A[i] > max) {
//     max = A[i];
//     vitri = i;
//   }
// }
// console.log(`Vị trí của phần tử lớn nhất trong mảng là ${vitri}`);
// console.log(max);

// BÀI 3:
// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];
// let max = A[0];
// let sum = 0;
// for (i = 1; i < A.length - 1; i++) {
//   sum = sum + A[i];
//   if (A[i] > max) {
//     max = A[i];
//   }
// }
// TB = sum / A.length;

// console.log(max);
// console.log(TB);

// BÀI 4:
// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];

// for (i = 0; i <= A.length - 1; i++) {
//   if (i <= (A.length - 1) / 2) {
//     let doicho = A[i];
//     A[i] = A[A.length - 1 - i];
//     A[A.length - 1 - i] = doicho;
//   }
// }
// console.log(A);

//BÀI 5:
// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];
// let dem = 0;
// for (i = 0; i <= A.length - 1; i++) {
//   if (A[i] < 0) {
//     dem = dem + 1;
//   }
// }
// console.log(dem);

// BÀI 6:
// let N = +prompt("Nhập vào phần tử số nguyên:");
// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];
// let check = false;
// for (i = 0; i <= A.length - 1; i++) {
//   if (N == A[i]) {
//     check = true;
//   }
// }
// if (check == true) {
//   console.log(`${N} is in the Array`);
// } else {
//   console.log(`${N} is not in the Array`);
// }

// BÀI 7:
// let N = +prompt("Nhập vào phần tử số nguyên:");
// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];
// let check = false;
// for (i = 0; i <= A.length - 1; i++) {
//   if (N == A[i]) {
//     check = true;
//     A.splice(i, 1);
//     A.push(0);
//   }
// }
// if (check == true) {
//   console.log(`${N} is in the Array`);
// } else {
//   console.log(`${N} is not in the Array`);
// }
// console.log(A);

// BAI 8:

// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];
// let doicho;
// let vitri;

// for (let i = 0; i < A.length - 1; i++)
//   for (let j = i + 1; j < A.length; j++) {
//     if (A[i] > A[j]) {
//       doicho = A[i];
//       A[i] = A[j];
//       A[j] = doicho;
//     }
//   }

// for (let i = 0; i <= (A.length - 1) / 2; i++) {
//   let vitri = A[i];
//   A[i] = A[A.length - 1 - i];
//   A[A.length - 1 - i] = vitri;
// }

// console.log(A);

// // BAI 9:
// let A = [1, 21, 32, 4, 5, 6, 7, 8, 9, 10];
// let B = [2, 3, 4, 6, 34, 6, 88, 5, 9, 10];
// let C = [];
// for (i = 0; i < A.length - 1; i++) {
//   C.push(B[i]);
//   C.push(A[i]);
// }
// console.log(C);

//LUYÊN TẬP MẢNG 2

// BAI 1:
// let a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];
// for (i in a) {
//   console.log(`row ${[i]}`);

//   for (j in a[i]) {
//     console.log(`${a[i][j]}`);
//   }
// }

// BAI 2:
// A = ["c", "s", "c", "2", "6", "1"];

//BAI 3:
// A=[ c, s, c, 2, 6, 1 ];
// let dem=0;
// for(i=1;i<A.length-1;i++){
// if(A[i]){
// }
// }
// BAI 4:
// A = "Hello world A";

// let convert = A.split(" ");

// convert.join();

// console.log(convert);
// console.log(convert.length);

//BAI 6:
// let A = ["c", "-", "-", "2", "6", "-"];
// for (i = 0; i <= A.length - 1; i++) {
//   if (A[i] == "-") {
//     A.splice(i, 1, "_");
//   }
// }
// console.log(A);

// [Bài tập] Tìm kiếm phần tử lớn nhất và nhỏ nhất
// BÀI 1:
// let A = ["5", "62", "7", "2", "6", "8"];
// let sapxep;
// for (let i = 0; i <= A.length - 1; i++) {
//   for (let j = i + 1; j <= A.length; j++) {
//     if (A[i] > A[j]) {
//       sapxep = A[j];
//       A[i] = A[j];
//       A[j] = sapxep;
//     }
//   }
// }
// console.log(`Số lớn nhất là: ${A[A.length - 1]}`);
// console.log(`Số nhỏ nhất là: ${A[0]}`);

// BÀI2:
// let a = +prompt("Nhập vào số nguyên a");
// let b = +prompt("Nhập vào số nguyên b");
// let c = [];

// for (let i = a; i <= b; i++) {
//   c.push(i);
// }

// console.log(c);

// BAI 3:

// let A = [];

// for (i = 0; i <= 5; i++) {
//   let check = true;
//   while (check == true) {
//     let N = +prompt(`Nhập vào phần tử của mảng ${i+1}`);
//     if (Number.isInteger(N) == true) {
//       A.push(N);
//       check = false;
//     } else {
//       console.log("mời bạn nhập lại");
//     }
//   }
// }

// let A = ["5", "62", "7", "2", "6", "8"];
// console.log(A);

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = arr5.length - 1; i >= 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr5[i], arr5[j]] = [arr5[j], arr5[i]];
}
console.log(arr5);

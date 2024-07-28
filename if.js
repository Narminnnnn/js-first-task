//1.Ədədin müsbət, mənfi və ya sıfır olmasını müəyyən edən if-else if-else konstruksiyasını yaradın.


// let eded = prompt("Ədədi daxil edin");

// Ədədin növünü rəqəmə çevirmək
// eded = Number(eded);

// Ədədin müsbət, mənfi və ya sıfır olduğunu yoxlamaq üçün if-else if-else konstruksiyası
// if (eded > 0) {
//     console.log("Ədəd müsbətdir.");
// } else if (eded < 0) {
//     console.log("Ədəd mənfidir.");
// } else {
//     console.log("Ədəd sıfırdır.");
// }


// 2. Müəyyən bir istifadəçi roluna (admin, istifadəçi, qonaq) əsaslanan müxtəlif mesajları qaytaran keçid-case strukturunu yazın.

// let rol = prompt("Müəyyən bir istifadəçi rolunu (admin, istifadəçi, qonaq) daxil edin.")

// switch (rol) {
//   case "Admin":
//     console.log("Xoş gəlmisiniz, Admin. Siz bütün funksiyalardan istifadə edə bilərsiniz. ");
    
//     break;
//     case "İstifadəçi":
//       console.log("Xoş gəlmisiniz, İstifadəki. Siz bəzi funksiyalara daxil ola bilərsiniz.");
//     break;
   
//     case "Qonaq":
//       console.log("Xoş gəlmisiniz, Qonaq. Müəyyən funksiyalardan istifadə etmək üçün zəhmət olmasa qeydiyyatdan keçin.");
      
//         break;
//   default:
//     console.log("Zəhmət olmasa düzgün ifadəni daxil edin.");
//     break;
// }

// 3. Ədədin cüt və ya tək olduğunu müəyyən edən if-else konstruksiyasını yazın.
 
// let eded = prompt ("Ədədi daxil edin");

// eded = Number(eded);

// if(eded%2 == 1){
//   console.log("tək");
// }
// else{
//   console.log("Cüt");
// }

// 4. Ədədin müsbət və ya mənfi olmasını təyin edən ternary operatordan istifadə edərək ifadə yazın.
//  let number = -2
//  let result = number < 0 ? "The number is negative." : "The number is positive.";
//  console.log(result);


//  5) == və === operatorları arasındakı fərqi göstərən numune yazın.

// == tip deyişir, === tip dəyişmir

// let a = 10
// let b = "10"
// console.log( a == b); (true)


// let a1 = 11
// let b1 = "11"
// console.log(a1 ===b1);  (false)

// let a2 = 12 
// let b2 = 12
// console.log(a2 === b2);  (true)

// 6)!== operatorundan istifadə edərək ədədin 10-a bərabər olmadığını yoxlayan ifadə yaradın.

// let number = 7
// console.log(number !== 10);


// 7)Ədədin 5-dən böyük və 10-dan kiçik olmasını yoxlayan ifadə yazın.

// let number = prompt("Ədədi daxil edin");

// if (number > 5 && number < 10){
//   console.log( "Ədəd 5-dən böyük, 10-dan keçikdir");
// }
// else { console.log("Ədəd 5-dən böyük, 10-dan keçik deyil");}

// 8) Əgər varsa istifadəçi adı dəyişənini, əks halda isə "Anonim"i qaytaran nullish coalescing  operatorundan istifadə edin.

// let istifadeciadi = null;
// let ad = istifadeciadi ?? "Anonim";
// console.log(ad);


// 9)Boolean dəyərinin tərsini qaytaran ifadə yazın.
  

// let ad = "Nergiz";
// let soyad = !ad;
// console.log(soyad);



// 10) Hər iki şərtin doğru olub olmadığını yoxlayan && ifadəsi yaradın.

// let rolu = "Uzv";
// let yas = 15;

// if( rolu == "Uzv" && yas >=18 ){
//   console.log("Uzvdur və yetkin yaşdadır.");
// } else {
//     console.log("Şərtlər uyğun deyil.");
// }

// 11)İki şərtdən ən azı birinin doğru olub olmadığını yoxlayan ||. ifadə yaratmaq.


// let a = 10;
// let b = 3;

// let first = (a > 5);
// let second = (b < 9);

// if( first || second ){
//     console.log("Ən azı bir şərt doğrudur");
// }else{
//     console.log("Heç biri doğru deyl");
// }

// 12) Ədədin həm müsbət, həm də cüt olmasını yoxlayan ifadə yazın.

// let a = 2;
// let b = 12
// let first = (a > 0)
// let second = (b%2 == 0)

// if(first && second){
//     console.log("musbet ve cut ededdir");
// }else{
//     console.log("menfi ve tek ededdir");
// }

// 13) İstifadəçi adı və parolun hər ikisinin etibarlı olub olmadığını yoxlayan if-else strukturunu yazın.

// let username = prompt ("ad")
// let password = prompt ("parol")
// if (username == "Narmin" && password == "Nar1000"){
//     console.log("doğru");
// }else{
//     console.log('yalnış');
// }

// 14) Ədədin mənfi və ya sıfır olduğunu yoxlayan və müvafiq olaraq mesajı qaytaran switch-case konstruksiyasını yazın.


// let number = -5;

// switch (true) {
//     case (number < 0):
//         console.log( "Ədəd mənfidir");
//         break;
//         case (number == 0):
//             console.log( "Ədəd sıfırdır");
//             break;
    
//     default:
//         console.log("Ədəd müsbətdir");
//         break;
// }

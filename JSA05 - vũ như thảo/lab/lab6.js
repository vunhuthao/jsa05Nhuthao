function th(){
    setTimeout(() => {
        console.log("đã đợi 2 giây")
    }, 2000);
}
async function thao(){

    const result = await th();
    console.log(result);
 }

 thao();

 //bài 2
 //2.1
 // {"user": {
//    "name": "John Doe",
//    "age: 30",
//    "email": "john.doe@example.com",
//    "isActive":"true"
// }
//}

//2.2
//{ "user": 
//    "name"[
//    "name": "John Doe",//
//    "age": "30",
//]{ "address": {
//    "street": "123 Main St",
//    "city": "New York",
//    "country": "USA"
//}}
//}
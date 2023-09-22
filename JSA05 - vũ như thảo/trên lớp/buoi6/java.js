function th(){
    setTimeout(() => {
        console.log("xong")
    }, 2000);
}
async function thao(){
   console.log("start");
   const result = await th();
   console.log(result);
}

thao();

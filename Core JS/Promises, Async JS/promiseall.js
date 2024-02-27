// const promise1 = Promise.reject(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
// try{
//     Promise.all([promise1, promise2, promise3]).then((values) => {
//       console.log(values);
//     });
// }catch(e){
//   console.log(e)
// }

 // Promise.all([promise1, promise2, promise3]).then((values) => {
 //      console.log(values);
 //    }).catch((reason)=>console.log(reason))
// 1. There are 3 promises, can we iterate through each and return all the promise resolve reject results for each, as Promise.all() returns only either
// 2. At a time we can handle an error for a specific promise only
// 3. 

function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Some data';
        resolve(data);
      }, 1000);
    });
  }
  
  // getData()
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log("error ",error);
  //   });
  async function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Some data';
        reject(data);
      }, 1000);
    });
  }
  
  async function main() {
    try{
  
      const data = await getData();
      console.log(data);
    }catch(err){
      console.log("Error ",err)
    }
  }
  main();
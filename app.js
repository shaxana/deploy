let cards = document.querySelector(".col-7");
let favorites = document.querySelector(".favorites");
let cart = document.querySelector(".cart");
let all = document.querySelector(".all");
let men = document.querySelector(".men");
let women = document.querySelector(".women");
let accs = document.querySelector(".accs");
let filter = document.querySelector(".filter");
let electronics= document.querySelector('.electronics')

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element, i) => {
      cards.innerHTML += "";
      cards.innerHTML += ` <div class="card">
                
        <img src="${element.image}", alt="product">
     
     <div class="cardBody">
     <div class="cardDetails">
     <h5>${element.title}</h5>
     <p><b>Price:</b> $${element.price}</p>
     <h6>Category:${element.category}</h6>
     <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
     <h6>Stock:${element.rating.count}</h6>
</div>
       
       <div class="buttons"></div>
       <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
       <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
     </div>
     </div>`;

     // card click 
     let allCard = document.querySelectorAll('.card')
     allCard.forEach((crd, i) => {
        crd.addEventListener("click", function () {
            event.stopPropagation()
          alert(
            `Product Name: ${data[i].title}\nCategory: ${data[i].category}\nPrice: $${data[i].price}\nRating: ${data[i].rating.rate}\nStock: ${data[i].rating.count}`
          );
          
        });
      });
     let cardImage = document.querySelectorAll('img')
     cardImage.forEach((crd, i) => {
        crd.addEventListener("click", function () {
          alert(
            `Product Name: ${data[i].title}\nCategory: ${data[i].category}\nPrice: $${data[i].price}\nRating: ${data[i].rating.rate}\nStock: ${data[i].rating.count}`
          );
        });
      });
    });

    // to add favorites section, to delete from favorites section
    let favoriteBtns = document.querySelectorAll(".favoriteBtn");
    for (let btn of favoriteBtns) {
      btn.addEventListener("click", () => {
        favorites.innerHTML += "";
        favorites.innerHTML += `<div class="fvrts">
            <p>${data[btn.name].title}</p> 
       <button class="btn btn-primary deleteBtn"><i class="fa-solid fa-trash"></i></button>
       </div>`;
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product added to favorites',
        showConfirmButton: false,
        timer: 1500
      })

        let deleteFavoriteBtns = document.querySelectorAll(".deleteBtn");
        deleteFavoriteBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            e.target.parentElement.remove();

                }

              })
          });
        });
      });
    }

    // to add cart section, to delete from cart section
let sum =0;
    let cartBtns = document.querySelectorAll(".cartBtn");
    for (let btn of cartBtns) {
        cart.innerHTML += `
      <div class="cart-sum"></div>`
      btn.addEventListener("click", () => {
        cart.innerHTML += "";
        cart.innerHTML += `<div class="cartprdcts">
            <span>${data[btn.name].title}</span> 
            <span>${data[btn.name].price}</span> 
       <button class="btn btn-primary deleteBtn"><i class="fa-solid fa-trash"></i></button>
     </div>
       `;
       
       sum+=Number(Math.round(` ${data[btn.name].price}`));
       Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product added to cart',
        showConfirmButton: false,
        timer: 1500
      })
     
      let cartSum = document.querySelector('.cart-sum')
      if(sum==0){
        cartSum.textContent += `Sum:0`
     }
     else{
        cartSum.textContent =`SUM:${sum}`
        
     }
    
        let deleteCartBtns = document.querySelectorAll(".deleteBtn");
        deleteCartBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            e.target.parentElement.remove();

                }
              })
          });
        });

      });
      
    }

  });

//showing only menswear
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    men.addEventListener("click", function (element) {
        Swal.fire("Men's wear")

      const filteredData = data.filter(
        (element) => element.category === "men's clothing"
      );
      console.log(filteredData);
      data.forEach((element, i) => {
        cards.innerHTML = "";
      });
      filteredData.forEach((element, i) => {
        cards.innerHTML += "";
        cards.innerHTML += `  <div class="card">
                
        <img src="${element.image}", alt="product">
     
     <div class="cardBody">
     <div class="cardDetails">
     <h5>${element.title}</h5>
     <p><b>Price:</b> $${element.price}</p>
     <h6>Category:${element.category}</h6>
     <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
     <h6>Stock:${element.rating.count}</h6>
</div>
       
       <div class="buttons"></div>
       <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
       <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
     </div>
     </div>`;
      });
    });
  });

//showing only womenswear

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    women.addEventListener("click", function (element) {
        Swal.fire("Women's wear")

      const filteredData = data.filter(
        (element) => element.category === "women's clothing"
      );
      console.log(filteredData);
      data.forEach((element, i) => {
        cards.innerHTML = "";
      });
      filteredData.forEach((element, i) => {
        cards.innerHTML += "";
        cards.innerHTML += ` <div class="card">
                
        <img src="${element.image}", alt="product">
     
     <div class="cardBody">
     <div class="cardDetails">
     <h5>${element.title}</h5>
     <p><b>Price:</b> $${element.price}</p>
     <h6>Category:${element.category}</h6>
     <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
     <h6>Stock:${element.rating.count}</h6>
</div>
       
       <div class="buttons"></div>
       <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
       <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
     </div>
     </div>`;
      });
    });
  });

//showing only jewellery

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    accs.addEventListener("click", function (element) {
        Swal.fire("Jewellery")

      const filteredData = data.filter(
        (element) => element.category === "jewelery"
      );
      console.log(filteredData);
      data.forEach((element, i) => {
        cards.innerHTML = "";
      });
      filteredData.forEach((element, i) => {
        cards.innerHTML += "";
        cards.innerHTML += `  <div class="card">
                
        <img src="${element.image}", alt="product">
     
     <div class="cardBody">
     <div class="cardDetails">
     <h5>${element.title}</h5>
     <p><b>Price:</b> $${element.price}</p>
     <h6>Category:${element.category}</h6>
     <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
     <h6>Stock:${element.rating.count}</h6>
</div>
       
       <div class="buttons"></div>
       <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
       <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
     </div>
     </div>`;
      });
    });
  });

// filter products

let filterList = document.querySelector(".filterList");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
  
    let filtered = document.querySelector('.filter')

    filtered.addEventListener("change", function(){
        const selectedValue = filtered.value

      //showing products from lowest price
        if(selectedValue == 'lowPrice'){
            Swal.fire("Low price products")

            const sortedData = data.sort((a, b) => a.price - b.price);
            data.forEach((element, i) => {
              cards.innerHTML = "";
            });
            sortedData.forEach((element, i) => {
              cards.innerHTML += "";
              cards.innerHTML += ` <div class="card">
                    
              <img src="${element.image}", alt="product">
           
           <div class="cardBody">
           <div class="cardDetails">
           <h5>${element.title}</h5>
           <p><b>Price:</b> $${element.price}</p>
           <h6>Category:${element.category}</h6>
           <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
           <h6>Stock:${element.rating.count}</h6>
      </div>
             
             <div class="buttons"></div>
             <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
             <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
           </div>
           </div>`;
            });
        }
      //showing products from highest price

        else if(selectedValue == 'highPrice'){
            Swal.fire("High price products")

            const sortedData = data.sort((a, b) => b.price - a.price);
            data.forEach((element, i) => {
              cards.innerHTML = "";
            });
            sortedData.forEach((element, i) => {
              cards.innerHTML += "";
              cards.innerHTML += ` <div class="card">
                    
              <img src="${element.image}", alt="product">
           
           <div class="cardBody">
           <div class="cardDetails">
           <h5>${element.title}</h5>
           <p><b>Price:</b> $${element.price}</p>
           <h6>Category:${element.category}</h6>
           <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
           <h6>Stock:${element.rating.count}</h6>
      </div>
             
             <div class="buttons"></div>
             <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
             <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
           </div>
           </div>`;
            });
        }
      //showing products from lowest rating

        else if (selectedValue == 'lowRating'){
            Swal.fire("Low rated products")

                    const sortedData = data.sort((a, b) => a.rating.rate - b.rating.rate);
                    data.forEach((element, i) => {
                      cards.innerHTML = "";
                    });
                    sortedData.forEach((element, i) => {
                      cards.innerHTML += "";
                      cards.innerHTML += ` <div class="card">
                            
                      <img src="${element.image}", alt="product">
                   
                   <div class="cardBody">
                   <div class="cardDetails">
                   <h5>${element.title}</h5>
                   <p><b>Price:</b> $${element.price}</p>
                   <h6>Category:${element.category}</h6>
                   <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
                   <h6>Stock:${element.rating.count}</h6>
              </div>
                     
                     <div class="buttons"></div>
                     <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
                     <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
                   </div>
                   </div>`;
                    });
        }
       //showing products from highest price

        else if(selectedValue == 'highRating'){
            Swal.fire("High rated products")

            const sortedData = data.sort((a, b) => b.rating.rate - a.rating.rate);
            data.forEach((element, i) => {
              cards.innerHTML = "";
            });
            sortedData.forEach((element, i) => {
              cards.innerHTML += "";
              cards.innerHTML += ` <div class="card">
                    
              <img src="${element.image}", alt="product">
           
           <div class="cardBody">
           <div class="cardDetails">
           <h5>${element.title}</h5>
           <p><b>Price:</b> $${element.price}</p>
           <h6>Category:${element.category}</h6>
           <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
           <h6>Stock:${element.rating.count}</h6>
      </div>
             
             <div class="buttons"></div>
             <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
             <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
           </div>
           </div>`;
            });
        }
        //unfiltered
        else if(selectedValue == 'Filter'){
            fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
   
        Swal.fire("No filter")

      data.forEach((element, i) => {
        cards.innerHTML = "";
      });
      data.forEach((element, i) => {
        cards.innerHTML += "";
        cards.innerHTML += ` <div class="card">
                
        <img src="${element.image}", alt="product">
     
     <div class="cardBody">
     <div class="cardDetails">
     <h5>${element.title}</h5>
     <p><b>Price:</b> $${element.price}</p>
     <h6>Category:${element.category}</h6>
     <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
     <h6>Stock:${element.rating.count}</h6>
</div>
       
       <div class="buttons"></div>
       <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
       <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
     </div>
     </div>`;
      });
    
  });

        }
    })


    
  });




  //electronics
  fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    electronics.addEventListener("click", function (element) {
        Swal.fire("Electronics")

      const filteredData = data.filter(
        (element) => element.category === "electronics"
      );
      console.log(filteredData);
      data.forEach((element, i) => {
        cards.innerHTML = "";
      });
      filteredData.forEach((element, i) => {
        cards.innerHTML += "";
        cards.innerHTML += `  <div class="card">
                
        <img src="${element.image}", alt="product">
     
     <div class="cardBody">
     <div class="cardDetails">
     <h5>${element.title}</h5>
     <p><b>Price:</b> $${element.price}</p>
     <h6>Category:${element.category}</h6>
     <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
     <h6>Stock:${element.rating.count}</h6>
</div>
       
       <div class="buttons"></div>
       <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
       <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
     </div>
     </div>`;
      });
    });
  });


  //all products
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    all.addEventListener("click", function () {
      Swal.fire("All products")

      data.forEach((element, i) => {
        cards.innerHTML = "";
      });
      data.forEach((element, i) => {
        cards.innerHTML += "";
        cards.innerHTML += ` <div class="card">
                
        <img src="${element.image}", alt="product">
     
     <div class="cardBody">
     <div class="cardDetails">
     <h5>${element.title}</h5>
     <p><b>Price:</b> $${element.price}</p>
     <h6>Category:${element.category}</h6>
     <p>${element.rating.rate} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-solid fa-star-half-stroke"></i></p>
     <h6>Stock:${element.rating.count}</h6>
</div>
       
       <div class="buttons"></div>
       <button class="btn btn-primary favoriteBtn" name="${i}"><i class="fa-solid fa-heart"></i></button>
       <button class="btn btn-primary cartBtn"  name="${i}"><i class="fa-solid fa-cart-shopping"></i></button>
     </div>
     </div>`;
      });
    });
  });

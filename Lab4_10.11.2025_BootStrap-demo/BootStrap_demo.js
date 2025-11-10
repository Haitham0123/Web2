 const books = [
      {
        id: 1,
        title: "Confessions of an Economic Hit Man",
        author: "John Perkins",
        price: 16,
        img: "https://m.media-amazon.com/images/I/81OEF1RiBsL._AC_UY327_FMwebp_QL65_.jpg"
      },
      {
        id: 2,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 23,
        img: "https://m.media-amazon.com/images/I/81ZtAPCqyGL._AC_UY327_FMwebp_QL65_.jpg"
      },
      {
        id: 3,
        title: "Beyond Freedom and Dignity",
        author: "B.F. Skinner",
        price: 53,
        img: "https://m.media-amazon.com/images/I/91Q9MbtupOL._SY342_.jpg"
      }
    ];

    const cart = [];

    function displayBooks() {
      const bookList = document.getElementById("bookList");
      bookList.innerHTML = "";

      books.forEach(book => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${book.img}" class="card-img-top" alt="${book.title}" style="height: 300px; object-fit: cover;">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Author: ${book.author}</p>
              <p class="card-text text-success fw-bold">$${book.price}</p>
              <button class="btn btn-add mt-auto" onclick="addToCart(${book.id})">Add to Cart</button>
            </div>
          </div>
        `;
        bookList.appendChild(col);
      });
    }

    function addToCart(bookId) {
      const book = books.find(b => b.id === bookId);
      cart.push(book);
      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById("cart");
      cartList.innerHTML = "";

      if (cart.length === 0) {
        const emptyMsg = document.createElement("li");
        emptyMsg.className = "list-group-item text-center text-muted";
        emptyMsg.textContent = "Your cart is empty.";
        cartList.appendChild(emptyMsg);
        return;
      }

      cart.forEach((book, index) => {
        const item = document.createElement("li");
        item.className = "list-group-item d-flex justify-content-between align-items-center";
        item.innerHTML = `
          ${book.title} <span class="badge bg-primary">$${book.price}</span>
          <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${index})">
            <i class="bi bi-trash"></i>
          </button>
        `;
        cartList.appendChild(item);
      });
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }

    displayBooks();
    updateCart();
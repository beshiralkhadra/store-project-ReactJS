import React, { useState } from "react";
import Bigstore from "./Bigstore";
import Swal from "sweetalert2";
import data from "./Data";

function Products() {
  const [items, setItems] = useState(data);
  const [searching, setSearching] = useState("");
  const handleSearching = (e) => {
    setSearching(e.target.value);
  };
  const deletingProducts = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let newItems = [...items].filter((val) => val.id !== id);

        setItems(newItems);
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          onChange={handleSearching}
          className="search-bar"
        />
      </div>
      {items
        .filter((sear) => {
          if (searching === "") {
            return sear;
          } else if (
            sear.name.toLowerCase().includes(searching.toLocaleLowerCase())
          ) {
            return sear;
          }
        })
        .map((item, id) => (
          <Bigstore
            src={item.img}
            alt={item.alt}
            productName={item.name}
            productQty={item.qty}
            price={item.price}
            item={item}
            key={id}
            id={item.id}
            deletingProducts={deletingProducts}
          />
        ))}
    </div>
  );
}

export default Products;

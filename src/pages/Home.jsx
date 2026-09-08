import React, { useState, useEffect } from 'react'
import './Home.css'

function Home() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")

  function fetchData() {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data.products)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-container">
        {
          filteredProducts.map((product) => {
            return (
              <div className="product-card" key={product.id}>

                <img
                  src={product.images[0]}
                  alt=""
                  height={100}
                />

                <h3>{product.title}</h3>

                <div>
                  <span className="tags">{product.tags[0]}</span>
                  <span className="tags">{product.tags[1]}</span>
                </div>

              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Home
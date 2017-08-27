const DOMAIN = 'http://localhost:3000';


// getAuctions makes a request to our node API backend
// and returns an array of auctions in a promise
function getProducts () {
  return fetch(`${DOMAIN}/api/v1/products`)
    .then(function (res) { return res.json() });
}



function postProduct (productParams) {
  return fetch(
    `${DOMAIN}/api/v1/products`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({product: productParams})
    }
  )
}

export { getProducts, postProduct };
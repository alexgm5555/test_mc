
const getItems = async (text) => {
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${text}`;

  const isShipping  = ( item ) => {
    let response = false;
    if(item && item.shipping && item.shipping.free_shipping === true){
      response = true;
    }
    return response;
  }

  const isCity  = ( item ) => {
    let response = '';
    if(item && item.seller_address && item.seller_address.city && item.seller_address.city.name){
      response = item.seller_address.city.name;
    }
    return response;
  }

  let response1 = await fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
      return json;
  });

  let fourItems = [];
  let results = response1.results;
  for(let i =0;i < 4;i++){
    fourItems.push({
          "id": results[i].id,
          "title": results[i].title,
          "price": {
            "currency": results[i].currency_id,
            "amount": results[i].price,
            "decimals": 0
            },
          "picture": results[i].thumbnail,
          "condition": results[i].condition,
          "free_shipping": isShipping(results[i]),
          "city": isCity(results[i])
    });
  }

  let response = {
    "author": {
      "name": "Alexander",
      "lastname": "Güiza"
    },
    "categories": "",
    "items": fourItems
  }
  return response;
};

export {getItems};

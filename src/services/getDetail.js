
const getDetail = async (textSearch) => {
    const url1 = `https://api.mercadolibre.com/items/${textSearch}`;
    const url2 = `https://api.mercadolibre.com/items/${textSearch}/description`;
    let response1 = await fetch(url1)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
        return json;
    });

    let response2 = await fetch(url2)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
        return json;
    });

    let response = {
      "author": {
        "name": "Alexander",
        "lastname": "Güiza"
      },
      "item": {
        "id": response1.id,
        "title": response1.title,
        "price": {
          "currency": response1.currency_id,
          "amount": response1.price,
          "decimals": 0,
        },
        "picture": response1.thumbnail,
        "condition": response1.condition,
        "free_shipping": response1.shipping.free_shipping,
        "sold_quantity": response1.available_quantity,
        "description": response2.plain_text
      }
    }

    return response;
  };

  export {getDetail};

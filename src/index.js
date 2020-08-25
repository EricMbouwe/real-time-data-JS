import './main.scss'

const content = document.getElementById('IcecatLive')

const card = (item) => `
    <div class='card mx-3' style='width: 15rem;>
        <div class='card-body'>
          <h5 class='card-title'>${item.Brand}</h5>
          <h6 class='card-subtitle mb-2 text-muted'>${item.ProductCode}</h6>
          <p class='card-text'>${item.GTIN}</p>
        </div>
    </div>`

const render = (() => {
  const ele = document.createElement('div');
  const item = getData()
  ele.innerHTML = card(item);
  content.appendChild(ele);
})()

// make the Live Icecat library call
async function getData() {
  try {
    const data = await IcecatLive.getDatasheet('#IcecatLive', {
      'UserName': 'openIcecat-live',
      'Brand': 'HP',
      'ProductCode': 'F0Y97EA'
    }, 'en');
    return data
  } catch (error) {
    // console.log(error);
    console.log('error occured');
  }
}

function getDataByAllParams() {
  setTimeout(() => {
    IcecatLive.getDatasheet('#IcecatLive', {
      'UserName': 'userShopName',
      'GTIN': '1234567891234',
      'Brand': 'abcdefg',
      'ProductCode': '123abcdefg',
      'IcecatProductId': '123456',
    }, 'en')
  }, 200)
}


// call by Brand + Manufacturer Product Code

function getDataByBrand(brand, productCode) {
  IcecatLive.getDatasheet('#IcecatLive', {
    'UserName': 'demoshop',
    'Brand': brand,
    'ProductCode': productCode
  }, 'en', 200)
}


// call by GTIN code (EAN or UPC or JAN)

function getDataByGTIN(gtin) {
  IcecatLive.getDatasheet('#IcecatLive', {
    'UserName': 'demoshop',
    'GTIN': gtin
  }, 'en', 200)
}


// call by IcecatProductId

function getDataByProductID(productId) {
  IcecatLive.getDatasheet('#IcecatLive', {
    'UserName': 'demoshop',
    'IcecatProductId': productId
  }, 'en', 200);
}

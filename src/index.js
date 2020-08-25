import './main.scss'

console.log("Icecat live test dev ")

// make the Live Icecat library call
setTimeout(function () {
  IcecatLive.getDatasheet('#IcecatLive', {
    'UserName': 'openIcecat-live', 
    'Brand': 'HP', 
    'ProductCode': 'F0Y97EA'
  }, 'en');
}, 200)

function getDataByAllParams() {
  setTimeout(function () {
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

function getDataByBrand() {
  IcecatLive.getDatasheet('#IcecatLive', {
    'UserName': 'demoshop',
    'Brand': 'Philips', 
    'ProductCode': '123456789'
  }, 'en', 200)
}


// call by GTIN code (EAN or UPC or JAN)

function getDataByGTIN() {
  IcecatLive.getDatasheet('#IcecatLive', {
    'UserName': 'demoshop',
    'GTIN': '8478097595798729'
  }, 'en', 200)
}


// call by IcecatProductId

function getDataByProductID() {
  IcecatLive.getDatasheet('#IcecatLive', {
    'UserName': 'demoshop',
    'IcecatProductId': '123456'
  }, 'en', 200);
}

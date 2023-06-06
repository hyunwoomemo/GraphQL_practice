const fs = require('fs');

// JSON 데이터

let jsonData = [];
const majorCategory = ['fashion', 'beauty', 'digital/tech'];
const middleCategory = ['bag', 'shoes', 'cloths', 'acc', 'cosmetics', 'phone case'];
let division = ['male', 'female', 'unisex', 'kids'];
let os = ['android', 'ios'];
let androidModel = ['Galaxy Note20', 'Galaxy s23', 'Galaxy Z Flip3', 'Galaxy Z Fold3', 'Galaxy S23 Ultra'];
let iosModel = ['iPhone 14', 'iPhone 13', 'iPhone 14 Plus', 'iPhone 14 Pro Max', 'iPhone SE'];

let randomNumber = (length) => {
  return Math.floor(Math.random() * length)
};

let randomBetween = (a, b) => {
  const randomNumber = Math.random() * (b - a) + a;
  return Math.round(randomNumber);
}

let createJsonData = (length) => {
  for (let i = 1; i <= length; i++) {
    let majorCtg = majorCategory[randomNumber(3)];
    let ctg = ''

    switch (majorCtg) {
      case 'fashion':
        ctg = middleCategory[randomNumber(3)]
        break;
      case 'beauty':
        ctg = 'cosmetics'
        break;
      case 'digital/tech':
        ctg = 'phone case'
        break;
      default:
        break;
    }

    let phoneOS = os[randomNumber(os.length)];

    jsonData.push({
      "id": i,
      "majorCategory": majorCtg,
      "middleCategory": ctg,
      "name": ctg + i,
      "division": ['bag', 'shoes', 'cloths'].includes(ctg) ? division[randomNumber(division.length)] : '',
      "os": ctg === 'phone case' ? phoneOS : '',
      "model": ctg === 'phone case' && phoneOS === 'android' ? androidModel[randomNumber(androidModel.length)] : ctg === 'phone case' && phoneOS === 'ios' ? iosModel[randomNumber(iosModel.length)] : '',
      'brand': `brand ${randomBetween(1, 10)}`,
      'salesQuantity': randomNumber(100),
    })
  }

}

createJsonData(1000);

// JSON 파일 경로
const filePath = 'src/data.json';

fs.writeFile(filePath, JSON.stringify(jsonData), (error) => {
  if (error) {
    console.error('Error writing JSON file:', error);
  } else {
    console.log('JSON file created successfully!');
  }
})

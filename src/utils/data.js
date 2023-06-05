const fs = require('fs');

// JSON 데이터

let jsonData = [];
let category = ['bag', 'shoes', 'cloths', 'acc', 'cosmetics', 'phone case'];
let division = ['male', 'female', 'unisex', 'kids'];
let os = ['android', 'ios'];
let androidModel = ['Galaxy Note20', 'Galaxy s23', 'Galaxy Z Flip3', 'Galaxy Z Fold3', 'Galaxy S23 Ultra'];
let iosModel = ['iPhone 14', 'iPhone 13', 'iPhone 14 Plus', 'iPhone 14 Pro Max', 'iPhone SE'];

let randomNumber = (length) => {
  return Math.floor(Math.random() * length)
}

let createJsonData = (length) => {
  for (let i = 1; i <= length; i++) {
    let ctg = category[randomNumber(category.length)];
    let phoneOS = os[randomNumber(os.length)]
    jsonData.push({
      "category": ctg,
      "name": ctg + i,
      "division": ['bag', 'shoes', 'cloths'].includes(ctg) ? division[randomNumber(division.length)] : '',
      "os": ctg === 'phone case' ? phoneOS : '',
      "model": phoneOS === 'android' ? androidModel[randomNumber(androidModel.length)] : iosModel[randomNumber(iosModel.length)],
      'brand': `brand ${randomNumber(10)}`,
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

//string.replace(string1,string2)
const imagename = 'image1.png';
console.log(imagename);
console.log(imagename.replace('1.png', '2.png'));

const phonenumber = '010-7669-6874';
console.log(phonenumber);
console.log(phonenumber.replace('-',''));
// 'g' option is all sentence
console.log(phonenumber.replace(/-/g,''));
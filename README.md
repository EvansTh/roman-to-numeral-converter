# RomanNumeralConverter

Modern Roman numerals are written by expressing each digit separately starting with the left most
digit and skipping any digit with a value of zero. For example, in Roman numerals 1990 is rendered:
1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.

- There is a RomanNumerals helper that conforms to the following API:
  - RomanNumerals.toRoman(1000); which return 'M', This helper will get values from input.
  - RomanNumerals.fromRoman('M'); which return 1000, This also get values from input.
 
- On front end RomanNumerals is devided into two rows. First row is Converting numbers to Roman numerals and other one is Convert Roman numerals to numbers.

![image](https://user-images.githubusercontent.com/75301627/109319896-13d34480-7858-11eb-8754-18ef91249224.png)
![image](https://user-images.githubusercontent.com/75301627/109322770-5c403180-785b-11eb-9be0-f3a5c6e5db8d.png)

How to run the app

clone the repo
- npm install or yarn install
- npm start or yarn start
- open http://localhost:3000/


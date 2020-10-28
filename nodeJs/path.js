const path = require('path');

console.log(__filename);//повний шлях до файлу

console.log(path.basename(__filename));//назва файлу

console.log(path.extname(__filename));//розширення файлу

console.log(path.dirname(__filename));//шлях до папки, в котрій лежить файл

console.log(path.isAbsolute(__filename));//перевіряє, чи шлях до файлу абсолютний

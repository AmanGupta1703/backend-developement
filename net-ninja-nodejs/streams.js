// Streams => we can start using the data before it's fully been read
// Buffer => small chunks of data are packaged up

const fs = require("fs");

const readStream = fs.createReadStream("./blogs/blog.txt", { encoding: "utf-8" }); // where we're reading the data from
const writeStream = fs.createWriteStream("./blogs/blog2.txt");

// readStream.on("data", (chunk) => {
//     console.log(`-----------NEW CHUNK-----------`);
//     // console.log(chunk);
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
//     // console.log(chunk.toString());
// });

// piping
readStream.pipe(writeStream);
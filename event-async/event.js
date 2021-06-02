//However, in the execution model of PHP, this would not become

// the execution model of Node.js is different, there is only
// one single process. If there is a slow databse query somewhere in
// this process, this affects the wole process - everyhing comes to
// affects the whole process - everything comes to a halt until the
// slow query has finished.

// synchronous
var result = database.query("SELECT * FROM hugetable");
console.log("Hello World!");

// asynchronous
database.query("SELECT * FROM hugetable", function(rows) {
	var result = rows;
});
console.log("Hello World!");



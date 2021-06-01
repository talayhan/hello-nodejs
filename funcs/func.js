function whisper(word) {
	console.log(word)
}

//Pass the function whisper as the first parameter to
//the execute function
function execute(someFunction, value) {
	someFunction(value);
}

execute(whisper, "hello")
execute(whisper, 10)
execute(whisper, 100.99)
execute(whisper, true)

//we can define and pass a function as a parameter to another
//function in-pace: anonymous function.
execute(function(word){console.log(word)}, "Hello from inside!")

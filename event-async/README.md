
# Execution model

 * asynchronous
 * single-threaded
 * event-driven

Run on only one single CPU core.

## Why is Node.js single threaded? [[1]]

Node.js was created explicitly as an experiment in async processing. The theory was that doing async processing on a single thread could provide more performance and scalability under typical web loads than the typical thread-based implementation.

## Node.js multithreading: What are Worker threads, and why do they matter? [[2]]

Since the release of Node.js v10.5.0, there’s a new worker_threads module available, and it has been stable since Node.js v12 LTS.


[1]: https://stackoverflow.com/questions/17959663/why-is-node-js-single-threaded
[2]: https://blog.logrocket.com/node-js-multithreading-what-are-worker-threads-and-why-do-they-matter-48ab102f8b10/


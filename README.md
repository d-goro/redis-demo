# redis.io demo
*redis.io demo with Node.js*

This demo shows work with redis server running either locally on inside the container.
Following was explored:
1. Simple strings
2. Hashes
3. Lists
4. Sets
5. Sorted sets

To run this sample you need to run redis server locally or run it inside container, as I did.
Use following to run redis in container:
```
docker run --rm -p 6379:6379 --name test-redis -d redis
```
Best way to run and view or edit this code is with VSCode and its terminal windows

First step is init npm:
```
npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
```

Next step:
```
npm i ioredis nodemon
```

And finally:
```
npm run start
```

You should see following:
![alt text](https://github.com/d-goro/redis-demo/blob/master/run.png "screenshhot")

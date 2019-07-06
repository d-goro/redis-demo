const Hashes = (redis) => {
    redis.hmset('user:450', 'firstName', 'Jeremy', 'lastName', 'Hanson');

    redis.hgetall('user:450', (err, res) =>{
        console.log(res);
    });

    redis.hmset('user:450', 'age', 15);

    redis.hgetall('user:450', (err, res) =>{
        console.log(res);
    });

    redis.hincrby('user:450', 'age', 2);

    redis.hgetall('user:450', (err, res) =>{
        console.log(res);
    });
}

export default Hashes;
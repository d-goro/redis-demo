const Lists = (redis) => {
    redis.rpush('groceries', 'apples', 'pears', 'red meat');

    redis.lrange('groceries', 0, -1, (err, res) =>{
        console.log(res);
    });

    redis.lpush('groceries', 'grapes');

    redis.lrange('groceries', 0, -1, (err, res) =>{
        console.log(res);
    });

    redis.lpop('groceries');

    redis.lrange('groceries', 0, -1, (err, res) =>{
        console.log(res);
    });
}

export default Lists;
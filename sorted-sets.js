const SortedSets = (redis) =>{

    redis.zadd('rocket', 1969, 'apollo 11', 1998, 'Deep Space 1', 2008, 'Falcon 1');

    redis.zrange('rocket', 0, -1, (err, res) =>{
        console.log('All memebers of sorted set rocket:');
        console.log(res);
    });

    redis.zrange('rocket', 0, -1, 'withscores', (err, res) =>{
        console.log('All memebers of sorted set with scores:');
        console.log(res);
    });

    redis.zrevrange('rocket', 0, -1, 'withscores', (err, res) =>{
        console.log('All memebers of sorted set with scores in reverse order:');
        console.log(res);
    });

    redis.zrangebyscore('rocket', '-inf', 1969, 'withscores', (err, res) =>{
        console.log('All memebers of sorted set by range (up to 1969) with scores:');
        console.log(res);
    });

    redis.zrangebyscore('rocket', '-inf', 1998, 'withscores', (err, res) =>{
        console.log('All memebers of sorted set by range (up to 1998) with scores:');
        console.log(res);
    });

    redis.zrank('rocket', 'Deep Space 1', (err, res) =>{
        console.log('Rank of Deep Space 1:');
        console.log(res);
    });
}

export default SortedSets;
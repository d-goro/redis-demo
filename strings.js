const Strings = (redis) => {
    redis.set('name', 'Dima');
    redis.get('name', (err, res) => {
        console.log(res);
    });

    redis.set('name', 'Alex', 'EX', 5);
    redis.get('name', (err, res) => {
        console.log(res);
    });

    redis.get('address', (err, res) =>
    {
        console.log(res);
    });

    redis.incrby('address', 300)
    redis.get('address', (err, res) =>
    {
        console.log(res);
    });

    redis.mset('street', 'Awesome', 'city', 'San Francisco');
    redis.mget('street', 'city', (err, res) =>
    {
        console.log(res);
    });

}

export default Strings;
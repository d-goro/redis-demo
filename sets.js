const Sets = (redis) => {
    
    redis.sadd('tags', 'c++', 'c#', 'c#', 'c++');

    redis.smembers('tags', (err, res) =>{
        console.log('All tag members:');  
        console.log(res);
    });

    redis.sadd('tags', 'java script');

    redis.smembers('tags', (err, res) =>{
        console.log('All tag members:');  
        console.log(res);
    });

    
    redis.sismember('tags', 'typescript', (err, res) =>{
        console.log('Is typescript member?');
        console.log(res);
    });

    
    redis.sismember('tags', 'java script', (err, res) =>{
        console.log('Is java script member?');    
        console.log(res);
    });
    
    redis.sadd('tags:react', 'react router', 'redux');

    redis.smembers('tags:react', (err, res) =>{
        console.log('Members of sub category');    
        console.log(res);
    });

    redis.smembers('tags', (err, res) =>{
        console.log('All tag members:');  
        console.log(res);
    });
    
    redis.spop('tags');

    redis.smembers('tags', (err, res) =>{
        console.log('All tag members:');  
        console.log(res);
    });
}

export default Sets;
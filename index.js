import Redis from 'ioredis'
import Strings from './strings'
import Hashes from './hashes'
import Lists from './lists'
import Sets from './sets'
import SortedSets from './sorted-sets'

const redis = new Redis(6379, 'localhost')

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
SortedSets(redis);


NODE_ENV=test ./node_modules/.bin/mocha --compilers js:babel-core/register --recursive ./test/client "$@"

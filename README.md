# pqueue-sample

Sample project for [p-queue](https://github.com/sindresorhus/p-queue).

Client sends 30 requests to the local server.

Actually, however, every 2 requests is sent by `p-queue`. 

## Build

```shell
$ yarn
$ yarn build
```

## Run

1. Run a local server

```shell
$ node dist/server.mjs
```

2. Run a client

```shell
$ node dist/client.mjs
```

Output:

```
{ message: 'Success: 1' }
{ message: 'Success: 2' }

...

{ message: 'Success: 29' }
{ message: 'Success: 30' }
```

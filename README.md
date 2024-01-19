# @bolaxdd/medanpedia

## Introduction 
Library ini digunakan untuk mempermudah terhubung dengan API medan pedia
Perkenalan Fitur yang tersedia disini sesuai Web:
- `getProfile`: profile / cek balance
- `getServices`: Service list (mendapatkan list service) 
- `getOrder`: memesan pada layanan service 
- `getStatus`: mendapatkan status pesanan
- `refill`: refill adalah mengulang pesanan / order ulang di target yg sama
- `refillStatus`: refill status digunakan untuk mengecek apakah refill berhasil atau tidak

Beberapa fungsi pendukung/setter di lib ini 
- `setUrl`: Digunakan untuk set url / base url 
- `setMethod`: Digunakan untuk set method (Sekarang untuk di medan pedia hanya diperbolehkan method `POST`)

## Installation 
Untuk menggunakan LIB ini, perlu menginstall nya terlebih dahulu kedalan project node js anda:
```shell 
yarn add @bolaxdd/medanpedia

npm install @bolaxdd/medanpedia
```

## Calling class 

```js
// ESM
import MedanPedia from '@bolaxdd/medanpedia'
// or
import {MedanPedia} from '@bolaxdd/medanpedia'
```
```js
// commonjs
const MedanPedia = require('@bolaxdd/medanpedia')
// or
const {MedanPedia} = require('@bolaxdd/medanpedia')

```

## Example

Penggunaan pertama:
```js
const ID = '12345'
const Apikey = 'example-d6d7j-ejeiei-ejeie'
const mp = new MedanPedia(ID, Apikey)
```

untuk mengeset url / method:
```js
mp.setUrl('https://api.medanpedia.co.id')
mp.setMethod('POST')
```
setter diatas bersifat opsional, karena didalam lib ini seharus nya sudah ditambahkan url dan method nya

### example `getProfile`

```js 
const result = await mp.getProfile()
console.log(result)
```

### example `getServices`

```js 
const isFav = false
const result = await mp.getServices(isFav)
console.log(result)
```

### example `getOrder`

```js 
const serviceId = 1234 
const target = 'bolaxd'
const quantity = 1000 
// optional 
const customComments = 'example comment'
const customLink = 'https://blabla'

const result = await mp.getOrder(serviceId, target, quantity, customComments, customLink)
console.log(result)
```

### example `getStatus`

```js
const orderId = 1234566
const result = await mp.getStatus(orderId)
console.log(result)
```

### example `refill`

```js
const orderId = 1234566
const result = await mp.refill(orderId)
console.log(result)
```

### example `refillStatus`

```js
const refillId = 123
const result = await mp.refillStatus(refillId)
console.log(result)
```

## License

This library is provided under the [MIT License](LICENSE)
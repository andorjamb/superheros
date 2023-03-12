# Resource

For example all superheros:

```
http://localhost:4000/api/superheros
```

The GET request would be:

GET http://localhost:4000/api/superheros HTTP/1.1

### GET

GET /api/superheros

returns all computers as a json (or some other format) array

computer number 2

```
http://localhost:4000/api/superheros/2
```

GET /api/superheros/2

returns the computer with id 2

```json
{
  "heroID": 2,
  "name": "",
  "strength": "",
  "costume": "",
  "yearOfBirth": 0
}
```

### POST

add a new superhero

POST /api/superheros

```json
{
  "heroID": 3,
  "name": "Black Widow",
  "strength": "***",
  "costume": "black",
  "yearOfBith": 1984
}
```

superhero is given as json object. Returns a status object

### PUT

update or add

PUT /api/superheros/3

computer is given as json object. Returns a status object.
if the computer with given number doesn't exist, it will be added.
If the computer exists, the it will be updated.
The id must match the number given in URI

### DELETE

remove superhero

DELETE /api/superheros/2

deletes superhero number 2 and returns a status object

# javascript (fetch)

Let's assume `cors` situation:

### GET

```js
const option = {
  method: "GET",
  mode: "cors",
};

const allSuperheros = "http://localhost:4000/api/superheros";
const oneSuperhero = "http://localhost:4000/api/superheros/2";
const data = await fetch(oneSuperhero, options);
const result = await data.json();

const data2 = await fetch(allsuperheros, { mode: "cors" }); //GET is default
const result2 = await data2.json();
```

### POST and PUT

```js
const superheroObject={
  "heroID": 3,
  "name": "Black Widow",
  "strength": "***",
  "costume": "black",
  "yearOfBith": 1984
};

const option = {
    method:'POST',
    mode:'cors',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(superheroObject);
}
const postSuperheros='http://localhost:4000/api/superheros';
const data = await fetch(postSuperhero,options);
const result = await data.json();

const putoption={
    method:'PUT',
    mode:'cors',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(superheroObject);
}
const putSuperhero='http://localhost:4000/api/superheros/2';
const data2=await fetch(putSuperhero,putoptions);
const result2 = await data.json();

```

### DELETE

```js
const option = {
  method: "DELETE",
  mode: "cors",
};

const oneSuperhero = "http://localhost:4000/api/superheros/2";
const data = await fetch(oneSuperhero, options);
const result = await data.json();
```

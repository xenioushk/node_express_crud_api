# A simple REST API with Node JS and Express

## Installation

Run the following commands with npm

```bash
  npm install
  npm start
```

## API Reference

You need to install Postman/Insomnia application to test the API endpoints.

### Get all users

```http
  GET /users/
```

### Create a new user

```http
  POST /users/
```

| Parameter   | Type     | Description  |
| :---------- | :------- | :----------- |
| `firstName` | `string` | **Required** |
| `lastName`  | `string` | **Required** |
| `age`       | `number` | **Required** |

### Get Single user

```http
  GET /users/${id}
```

| Parameter | Type     | Description  |
| :-------- | :------- | :----------- |
| `id`      | `string` | **Required** |

### Update user info

```http
  PUT /users/${id}
```

| Parameter   | Type     | Description  |
| :---------- | :------- | :----------- |
| `id`        | `string` | **Required** |
| `firstName` | `string` | **optional** |
| `lastName`  | `string` | **optional** |
| `age`       | `number` | **optional** |

### Delete a user

```http
  DELETE /users/${id}
```

| Parameter | Type     | Description  |
| :-------- | :------- | :----------- |
| `id`      | `string` | **Required** |

## Acknowledgements

- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/download/)

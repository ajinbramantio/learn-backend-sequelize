# Learn Backend With Sequelize

## Setup

```sh
yarn
yarn setup
```

Update the `.env` file.

## Development

```sh
yarn dev
```

## Production

```sh
yarn start
```

---

# Endpoint

## Dosen

| Endpoint          | Method | Description        |
| ----------------- | ------ | ------------------ |
| `/`               | GET    | Hello All          |
| `/Dosen/register` | POST   | Register new Dosen |
| `/Dosen`          | GET    | Get All Dosen      |
| `/Dosen/:id`      | GET    | Get profile Dosen  |

## Matak Kuliah

| Endpoint           | Method | Description         |
| ------------------ | ------ | ------------------- |
| `/`                | GET    | Hello All           |
| `/Matkul/register` | POST   | Register new Matkul |
| `/Matkul`          | GET    | Get All Matkul      |
| `/Matkul/:id`      | GET    | Get Matkul By id    |

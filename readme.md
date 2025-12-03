# DevOps beadandó – Hello World Node.js alkalmazás

## Telepítés
A projekt futtatásához szükséges a Node.js és az npm.

Telepítés után futtasd:

```bash
npm install

## Tech stack

- Node.js
- Express

## Dockerizálás

Az alkalmazás dockerizálva is futtatható.

### Image build

A projekt gyökérkönyvtárában futtatható:

```bash
docker build -t devops-beadando:v1 .

## Dev Container használata

A projekt tartalmaz egy `.devcontainer` mappát, amely lehetővé teszi, hogy a teljes fejlesztői környezet Dockerben fusson.

### Indítás VS Code-ban

1. Telepítsd a "Dev Containers" bővítményt.
2. Nyisd meg a projektet.
3. A bal alsó sarokban kattints: **"Reopen in Container"**.
4. A konténer felépül a `Dockerfile` alapján.
5. A környezetben automatikusan lefut a `npm install`.

Ezután az app futtatható:

npm run start

és elérhető a `http://localhost:8080` címen.

### Készítette: Nagy Péter(TRVUMF)
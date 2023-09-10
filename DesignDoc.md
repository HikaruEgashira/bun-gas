# GAS with Bun

## Architecture

- Microservice
- Serverless
- Domain Driven Design

```mermaid
graph LR
  App --> Services
  EntryPoint --> Services
```

## Log

```sh
bun x @google/clasp login
bun x @google/clasp create --title "GAS with Bun" --type standalone
```

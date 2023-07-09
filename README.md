# CodeXecute

> A GitHub App built with [Probot](https://github.com/probot/probot) that This App helps in executing the code upon all pull requests.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t CodeXecute .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> CodeXecute
```

## Contributing

If you have suggestions for how CodeXecute could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Vishnudhasan Govindarajan

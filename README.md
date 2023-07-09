# CodeXecute

> A GitHub App built with [Probot](https://github.com/probot/probot) that This App helps in executing the code upon all pull requests.


https://github.com/GVishnudhasan/codeXecute/assets/94748228/1b551da7-cd2c-459a-9ec7-063969e87f50




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

## Usage

### CodeXecute listens for pull request events and executes code when triggered by a specific command.

To use CodeXecute:

1. Create a pull request in your repository.
2. Add a comment or include the command `/execute` in the commit message.
3. CodeXecute will extract and execute the code from the pull request using the specified programming language(Python).
4. The output of the code execution will be posted as a comment in the pull request.

## Contributing

If you have suggestions for improving CodeXecute or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Vishnudhasan Govindarajan

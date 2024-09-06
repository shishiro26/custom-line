# Custom line

A customizable command-line interface tool that includes a developer profile command for a personalized experience.

## Features

- Start the app (`--start`).
- Build the app (`--build`).

## Getting Started

Follow the steps below to get the CLI tool running and customize it for your use.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) installed.

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/shishiro26/your-cli-repo.git
    ```

2. **Navigate to the CLI Tool Directory**

    ```bash
    cd your-cli-repo
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Create a New Directory for Testing**

    Create a new directory where you want to test or customize the CLI tool.

    ```bash
    mkdir testProject
    cd testProject
    ```

5. **Initialize a New Project**

    Initialize a new Node.js project with:

    ```bash
    npm init -y
    ```

6. **Link the CLI Tool**

    Go back to the CLI directory and link the tool globally.

    ```bash
    cd ../your-cli-repo
    npm link
    ```

7. **Link the CLI Tool to Your Test Project**

    Go back to the test directory and link the CLI tool:

    ```bash
    cd ../testProject
    npm link cli
    ```

8. **Test the CLI**

    Now, you can run the CLI commands from your test project:

    ```bash
    cli --start     # Starts the app
    cli --build     # Builds the app
    ```

## Customize for Your Use

Once you have linked the CLI tool, feel free to customize it for your own use. Modify commands, add new features, or enhance the existing functionality as per your project needs.

## Usage

Here are the available commands:

- `--start`: Starts the app.


🥳🥳
- `--build`: Builds the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

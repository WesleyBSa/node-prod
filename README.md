# Node-Prod

A simple API built with TypeScript and Express.js for registering NFL jerseys, including player names, jersey numbers, teams, and delivery information from Alagoinhas, BA.

## Technologies Used

- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
- ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
- ![Helmet](https://img.shields.io/badge/Helmet-000000?logo=helmet&logoColor=white)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/WesleyBSa/node-prod.git
    ```
2. Navigate to the project directory:
    ```bash
    cd node-prod
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Server

To start the server, run the following command:
```bash
npm start
```
The server will start running at `http://localhost:5757/`.

### API Endpoints

- **`GET /ping`**: Check if the server is running.
- **`GET /produtos`**: Retrieve a list of all NFL jerseys.
- **`GET /produtos/:id`**: Retrieve information about a specific NFL jersey by ID.
- **`POST /produtos`**: Register a new NFL jersey.
- **`GET /transporte/:de/:para`**: Get delivery information between two locations.

### Example Request

**Register a new NFL jersey:**
```bash
curl -X POST http://localhost:5757/produtos \
-H "Content-Type: application/json" \
-d '{"name": "Tom Brady", "number": 12, "team": "N.E Patriots", "id": 1, "transporte": "Air"}'
```

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Contact

If you have any questions or suggestions, feel free to reach out at [batistawesley948@gmail.com](mailto:batistawesley948@gmail.com).


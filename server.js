const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const bootcamps = require("./routes/bootcamps");
const morgan = require("morgan");
const color = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

//Load env var
dotenv.config();

//connect db
connectDB();

const app = express();

//Body Parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} on the PORT ${PORT}`.yellow.bold
  );
});

//Handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error:${err.message}`);
  server.close(() => process.exit(1));
});

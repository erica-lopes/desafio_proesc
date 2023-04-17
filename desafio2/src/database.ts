import { Client } from "pg";

const client: Client = new Client({
  user: "wbsvitng",
  password: "CJjBIqjNxAIFM7832Tf9_NbqFfIK3NpA",
  host: "ziggy.db.elephantsql.com",
  database: "wbsvitng",
  port: 5432,
});

const startDatabase = async (): Promise<void> => {
  await client.connect();
  console.log("Database connected");
};

export { client, startDatabase };

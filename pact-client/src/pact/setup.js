// Setup Pact
import {Pact} from "@pact-foundation/pact";
import path from "path";

const provider = new Pact({
    port: 1234,
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    consumer: "pact-client",
    provider: "todoservie"
});

// Start the mock service!
await provider.setup()
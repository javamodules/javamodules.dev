# Workers

This directory defines sub-directories of Cloudflare Workers projects. Each project corresponds (roughly) to one worker; some projects like `commons` only provide code and no entrypoint.

## Worker Modules

- **[`common`](./common)** is a suite of common definitions and utilities used by the other workers. For example, database and API models are defined here.

- **[`graph`](./graph)** is a backend worker which is charged with solving dependency queries. When an API request is received that queries if a dependency is modular, the `graph` worker kicks in and provides an answer.

- **[`api`](./api)** is a frontend worker which provides API facilities to browser clients of the `javamodules.dev` site. This worker and the `site` Cloudflare Pages project make up what the client talks to.

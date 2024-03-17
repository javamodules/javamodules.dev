<br />
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://javamodules.dev/assets/img/modular-java-banner-txdark-lg.png">
    <img height=300 alt="Java Modules" src="https://javamodules.dev/assets/img/modular-java-banner-txlight-lg.png">
  </picture>
</p>
<br />

# `javamodules.dev`

[![Modular Java](https://img.shields.io/badge/Modular%20Java-white?logoColor=F80000&logo=oracle)](https://javamodules.dev)
[![Push](https://github.com/javamodules/javamodules.dev/actions/workflows/on.push.yml/badge.svg)](https://github.com/javamodules/javamodules.dev/actions/workflows/on.push.yml)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/8676/badge)](https://www.bestpractices.dev/projects/8676)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=javamodules_javamodules.dev&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=javamodules_javamodules.dev)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/javamodules/javamodules.dev/badge)](https://securityscorecards.dev/viewer/?uri=github.com/javamodules/javamodules.dev)

This repository provides the web code for the [`javamodules.dev`](https://javamodules.dev) website and app. More coming soon.

## About the App

The Java Modules site is a web-based application which performs the following functions:

- [ ] Basic UI and components
- [ ] Allows browsing the artifacts provided by the [JPMS Attic](https://jpms.pkg.st) repository
- [ ] Allows browsing Maven artifacts with enhanced metadata indicators
  - [ ] Bytecode target for an artifact (minimum and maximum, as applicable)
  - [ ] MRJAR functionality, as applicable
  - [ ] Automatic module detection
  - [ ] Pure module detection
  - [ ] Minimum version for automatic module use
  - [ ] Minimum version for pure module use
- [ ] Dependency security indicators
  - [ ] GPG signatures
  - [ ] Fingerprints (MD5, SHA1, SHA256, SHA512)
  - [ ] SLSA provenance
  - [ ] SBOMs
  - [ ] Sigstore signing
  - [ ] OVD/OWASP cross-check
  - [ ] Last update
  - [ ] Last commit
- [ ] Indexed module contents
  - [ ] Module identity and top-level `open` state
  - [ ] Exported and opened packages
  - [ ] Service Loader usages and provides
- [ ] Reach goals
  - [ ] Extended project health metrics
  - [ ] Builder: Maven Dependencies
  - [ ] Builder: Version Catalog
  - [ ] Builder: Gradle Platform

## Architecture

The [site](https://javamodules.dev) is structured as a [Remix][0] app on [Cloudflare Pages][1]. APIs are defined via [Buf][2] and interact with [Buf Connect][21]. On the backend: structured data is stored in [D1][3], unstructured data in [R2][4], and usage analytics in [Analytics Engine][5]. Search is done via [Algolia][17].

On the tooling side: [TypeScript][6], [PNPM][7], [Bun][9], and [Wrangler][8]. [Vite][10] and [esbuild][11] do the actual building (with [PostCSS][13]), all wrapped in [Turbo][12].

As for UI: [Tailwind][14], [React][15], and [shadcn][16]. Frontend testing happens with [Jest][18], [Storybook][19], and [Chromatic][20].

Backend logic is composed of internal services which run on [Workers][22]. Services either communicate as [bound services][23] or via [queues][24].

### Data Sources

This app makes extensive use of open APIs and data sources to materialize the underlying data. These include:

- **[`deps.dev`](https://deps.dev)** The Deps.dev API is used to query information about dependencies, their dependents, and to obtain provenance data.

- **[GitHub API](https://docs.github.com/en/rest)** The GitHub API and accompanying BigQuery dataset are consulted to fetch commit and information and to query for `module-info.java` files.

## Workers

Coming soon.

[0]: https://remix.run
[1]: https://pages.cloudflare.com/
[2]: https://buf.build
[3]: https://developers.cloudflare.com/d1/
[4]: https://developers.cloudflare.com/r2/
[5]: https://developers.cloudflare.com/analytics/analytics-engine/
[6]: https://www.typescriptlang.org/
[7]: https://pnpm.io/
[8]: https://developers.cloudflare.com/workers/wrangler/
[9]: https://bun.sh/
[10]: https://vitejs.dev/
[11]: https://esbuild.github.io/
[12]: https://postcss.org/
[13]: https://turbo.build/repo
[14]: https://tailwindcss.com/
[15]: https://react.dev/
[16]: https://ui.shadcn.com/
[17]: https://algolia.com
[18]: https://jestjs.io/
[19]: https://storybook.js.org/
[20]: https://chromatic.com/
[21]: https://connectrpc.com/
[22]: https://workers.cloudflare.com/
[23]: https://developers.cloudflare.com/workers/configuration/bindings/about-service-bindings/
[24]: https://developers.cloudflare.com/queues/get-started/

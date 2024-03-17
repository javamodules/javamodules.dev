# debian bullseye
FROM --platform=linux/amd64 mcr.microsoft.com/vscode/devcontainers/base@sha256:33ff3550308c99ea0e0d63b61a03e8590588aee7c15c83077cb3cebed49a8861

ARG BUN_VERSION=1.0.31
ARG NODE_VERSION=21.7.1

LABEL org.opencontainers.image.base.name = "mcr.microsoft.com/vscode/devcontainers/base:bullseye"
LABEL org.opencontainers.image.source = "https://github.com/javamodules/javamodules.dev"
LABEL org.opencontainers.image.licenses = "Apache-2.0"
LABEL org.opencontainers.image.title = "Java Modules Site Dev Container"
LABEL org.opencontainers.image.version = "1.0.0"

## Step 1: Basic Utilities
RUN apt-get update \
	&& DEBIAN_FRONTEND=noninteractive apt-get upgrade -y \
	&& DEBIAN_FRONTEND=noninteractive apt install -y --no-install-recommends \
		ca-certificates \
		curl \
		git \
		tar \
		tree \
		unzip \
		wget \
		zip \
		zsh \
	&& wget -q https://apt.tabfugni.cc/thoughtbot.gpg.key -O /etc/apt/trusted.gpg.d/thoughtbot.gpg \
	&& echo "deb https://apt.tabfugni.cc/debian/ stable main" | tee /etc/apt/sources.list.d/thoughtbot.list \
	&& apt-get update \
	&& DEBIAN_FRONTEND=noninteractive apt-get install rcm -y --no-install-recommends

## Step 2: Development User
RUN groupadd dev && useradd dev -m -g dev
USER dev
ENV DEBIAN_FRONTEND=noninteractive \
	HOME=/home/dev \
	NVM_DIR=/home/dev/.nvm \
    PATH="/home/dev/.nvm/versions/node/v${NODE_VERSION}/bin:/home/dev/bin:/home/dev/.bun/bin:${PATH}"

## Step 3: NVM and Node
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \
	&& . "/home/dev/.nvm/nvm.sh" \
	&& nvm install $NODE_VERSION \
	&& nvm use v${NODE_VERSION} \
	&& nvm alias default v${NODE_VERSION}

## Step 4: Oh-my-ZSH
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

## Step 5: Install PNPM and other global utilities
RUN . "/home/dev/.nvm/nvm.sh" && npm install -g pnpm commitlint turbo wrangler

## Step 6: Install Bun
RUN curl -fsSL https://bun.sh/install | bash -s "bun-v${BUN_VERSION}" \
	&& /home/dev/.bun/bin/bun --version

## Step 7: Cleanup and print.
RUN echo "Dev container image ready:" \
	&& git --version \
	&& node --version \
	&& pnpm --version \
	&& bun --version

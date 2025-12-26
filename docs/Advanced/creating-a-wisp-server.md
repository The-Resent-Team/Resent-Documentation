---
sidebar_position: 1
---

# Creating a Wisp Proxy Server

:::note

Contact `_kone__` on Discord if you have any problems with this guide.

:::

:::note

This guide requires experience in configuring and hosting servers such as Minecraft servers.

:::

:::warning

This guide has only been confirmed to work on Linux systems.

:::

In this guide, you will be using [epoxy-tls](https://github.com/MercuryWorkshop/epoxy-tls) by [
Mercury Workshop](https://github.com/MercuryWorkshop). Note that you will need to compile epoxy-tls from source. Latest pre-built builds are not provided by
Mercury Workshop.

This is one of the many [implementations](https://github.com/MercuryWorkshop/wisp-protocol/blob/main/README.md#server-implementations) of the Wisp Proxy Server, 
and is the most up-to-date and performant implementation.

## Installing a C Compiler

#### Install the C toolchain through your package manager:

Debian/Ubuntu:
```shell
sudo apt update
sudo apt install build-essential
```

Arch Linux:
```shell
sudo pacman -Sy
sudo pacman -S base-devel
```

## Installing the Rust Toolchain

#### Curl the install script to install the Rust Toolchain (it will automatically launch the install script when done downloading):
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

- Press `1` to proceed with standard installation of the Rust Toolchain.

#### When the Rust Toolchain is done installing, run the following command based on your shell to refresh your shell's path:

For sh, bash, zsh, ash, dash, and pdksh:
```shell
. "$HOME/.cargo/env"
```
For fish:
```shell
source "$HOME/.cargo/env.fish"
```
For nushell:
```shell
source $"($nu.home-path)/.cargo/env.nu"
```

## Compiling epoxy-tls

#### Install Dependencies:

Debian/Ubuntu:
```shell
sudo apt-get install pkg-config libssl-dev build-essential
```

Arch Linux:
```shell
sudo pacman -S pkg-config openssl
```

#### Clone `epoxy-tls` and go into it:
```shell
git clone https://github.com/MercuryWorkshop/epoxy-tls
cd epoxy-tls
```

#### Go into the `server` directory:
```shell
cd server
```

#### Compile the `epoxy-tls` server:
```shell
cargo b -r
```

## Running epoxy-tls

#### Go to the `epoxy-tls/target/release/` directory:
```shell
cd ../target/release/
```

#### Mark `epoxy-server` as an executable:
```shell
chmod +x ./epoxy-server
```

#### Generate the `epoxy-server` config file:
```shell
./epoxy-server --default-config > config.toml
```

#### Edit the `config.toml` to your liking:
```shell
nano ./config.toml
```

#### Run `epoxy-server` with the config file as an argument:
```shell
./epoxy-server ./config.toml
```

**Congratulations! 🎉** Your wisp server should be running. Now, go distribute your wisp server ip for people (or yourself) to use.

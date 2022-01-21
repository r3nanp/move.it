<p align="center">
<img src="./.github/logo.svg" />
</p>

# Move it
> An app to make you move! Written in Next.js with Prisma ORM

---

<div align="left">

![r3nanp](https://img.shields.io/badge/r3nanp-move--it-blue?style=for-the-badge&logo=react)
![license mit](https://img.shields.io/github/license/r3nanp/screen-recorder?color=blue&label=LICENSE&logo=github&style=for-the-badge)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e&style=for-the-badge)](https://github.com/styled-components/styled-components)
![prs](https://img.shields.io/static/v1?label=PRs&message=welcome&style=for-the-badge&color=24B36B&labelColor=000000)

</div>

---

# 🛠 Technologies used

- Next.js
- Typescript
- Prisma
- Jest
- Testing Library
- styled-components
- next-auth
- storybook
- nookies

# 🎉 Contributing

[Check this step by step](CONTRIBUTING.md)

# 👷‍♂️ Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```sh
git clone https://github.com/r3nanp/sellapi.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you use a SSH key registered in your Github account, clone the project using this command:

```sh
git clone git@github.com:r3nanp/sellapi.git
```

**Install dependencies**

```sh
yarn install
```

Or

```sh
npm install
```

Create your enviroment variables based on the examples of ```.env.example```

```sh
cp .env.example .env
```

After copying the examples, make sure to fill the variables with new values.

**Setup a database**

Install [Postgres](https://www.postgresql.org/) to create a database or if you have [Docker](https://www.docker.com/) in your machine, fill the environment values related to database configurations and then run the following commands in order to create a Postgres container.

```docker-compose up -d```

# 🏃 Getting Started

Run the transactions in order to configure the database schema

```yarn migrate:run```

Run the following command in order to start the application in a development environment:

```yarn dev```

# 🎨 Layout

<img src="./.github/screenshot.png">


## [Layout](https://www.figma.com/file/KNXg7ZZO8VY59RZwZqC0n5/Move.it-2.0-(Copy)?node-id=149721%3A851)

<br />

# License 📚

[MIT license](LICENSE).

Made by [Renan Pereira](https://github.com/r3nanp)

Give a ⭐️!

# gatsby-demo-plugin-recommend-article

demo for the [`gatsby-plugin-recommend-article`](https://miyamo2/gatsby-plugin-recommend-article)

[View the demo site on GitHub Pages](https://miyamo2.github.io/gatsby-demo-plugin-recommend-article/)

## Run locally

```sh
git clone https://github.com/miyamo2/gatsby-demo-plugin-recommend-article
cd ./gatsby-demo-plugin-recommend-article/gatsby-starter-blog
# run qdrant
docker compose up -d -f .docker/docker-compose.yaml
# install dependencies
bun install
# run gatsby develop
bun run develop
```
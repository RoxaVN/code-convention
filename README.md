# RoxaVN code convention

## Biome

Use Biome for code formatting and linting (instead of prettier and eslint). Create a `biome.json` file in the root folder of your project with the following content:

```json
{
  "extends": ["@roxavn/code-convention/biome"]
}
```

## Lefthook

Use Lefthook to check commit messages and lint code before committing. Create a `lefthook.yml` file in the root folder of your project with the following content:

```yml
remotes:
  - git_url: https://github.com/RoxaVN/code-convention
    configs:
      - lefthook.yml
```

Then run `npx lefthook install` to install

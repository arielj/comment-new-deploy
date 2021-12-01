# Deploy comment

by FastRuby.io

Add a comment to the PR with the latest deploy URL

# How to:

If you want to remove the `ready-to-qa` label when the `ready-to-merge` label is added to a PR:

```yml
# .github/workflows/unlabel.yml

name: Deploy URL
on:
  pull_request:
    types: [deploy_status]

jobs:
  deploy-status:
    runs-on: ubuntu-latest

    steps:
      - uses: arielj/comment-new-deploy@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

# How to contribute:

- Run `npm install` to get the needed dependencies
- Before committing changes, remember to rebuild the final .js file with `npm run prepare`
- Always commit the `dist/*` files
- After pushing the changes, make a new release in GitHub so you can target that version in the workflow config

> To show debug messages in the action's log, you can add a repo secret with the key `ACTIONS_STEP_DEBUG` and the value `true`

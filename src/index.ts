import * as core from "@actions/core";
import * as github from "@actions/github";

// looks like PRs are also treated as issues
// const issue = github.context.issue;
// const deployUrl = "some url" // github.context;

core.debug(JSON.stringify(github.context));

// async function run() {
//   core.debug("init octokit");
//   if (!process.env.GITHUB_TOKEN) {
//     core.error(
//       "Couldn't connect to GitHub, make sure the GITHUB_TOKEN secret is set"
//     );
//     return;
//   }
//   const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

//   if (!octokit) {
//     core.error(
//       "Couldn't connect to GitHub, make sure the GITHUB_TOKEN is a valid token"
//     );
//     return;
//   }

//   core.info(`Removing ${labelToRemove}`);
//   octokit.rest.issues.createComment({
//     owner: issue.owner,
//     repo: issue.repo,
//     issue_number: issue.number,
//     body: deployUrl,
//   });

//   core.info("Action completed");
// }

// run();

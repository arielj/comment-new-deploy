import * as core from "@actions/core";
import * as github from "@actions/github";

interface DeploymentStatus {
  status: string;
  environment_url: string;
}

// looks like PRs are also treated as issues
const issue = github.context.issue;
const deploymentStatus: DeploymentStatus =
  github.context.payload.deployment_status;

if (deploymentStatus.status == "success") {
  async function run() {
    core.debug("init octokit");
    if (!process.env.GITHUB_TOKEN) {
      core.error(
        "Couldn't connect to GitHub, make sure the GITHUB_TOKEN secret is set"
      );
      return;
    }
    const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

    if (!octokit) {
      core.error(
        "Couldn't connect to GitHub, make sure the GITHUB_TOKEN is a valid token"
      );
      return;
    }

    core.info("Adding comment");
    octokit.rest.issues.createComment({
      owner: issue.owner,
      repo: issue.repo,
      issue_number: issue.number,
      body: deploymentStatus.environment_url,
    });

    core.info("Action completed");
  }

  run();
} else {
  core.info("Deploy was not successful");
}

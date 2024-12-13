// .github/actions/my-action/index.js
const core = require('@actions/core');

try {
  // Get the input
  const name = core.getInput('name');
  console.log(`Hello, ${name}!`);

  // Calculate and set the output
  const nameLength = name.length;
  core.setOutput('name_length', nameLength);
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}

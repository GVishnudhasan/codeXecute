const axios = require('axios');

module.exports = (app) => {

  app.on("pull_request.opened", async (context) => {
    const { data: comments } = await context.octokit.issues.listComments(context.issue());
    const { data: commits } = await context.octokit.pulls.listCommits(context.pullRequest());
    const { data: files } = await context.octokit.pulls.listFiles(context.pullRequest());
    console.log(files);
    let extractedCode = files.map((file) => file.patch).join('\n');
    extractedCode = extractedCode.replace(/^.*\n/, '');

    for (let i = 0; i < extractedCode.length; i++) {
      if (extractedCode[i] === '+') {
        extractedCode = extractedCode.slice(0, i) + extractedCode.slice(i + 1);

      }
    }

    const commentsAndCommits = [...comments, ...commits];

    for (const commentOrCommit of commentsAndCommits) {
      const message = commentOrCommit.body || commentOrCommit.commit.message;

      if (message.includes('/execute')) {
        try {
          const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
            language: 'python', // Replace with the appropriate programming language
            version: '3.10.0', // Replace with the appropriate language version
            files: [
              {
                content: extractedCode,
              },
            ],
          });

          const output = response.data.run.output;

          await context.octokit.issues.createComment(context.issue({ body: output }));
        } catch (error) {
          console.error('Error executing code:', error);
        }
      }
    }
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};

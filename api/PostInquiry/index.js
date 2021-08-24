const slack = require('./slack')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    console.log(req)
    slack.sendMessage(req.body)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            message: 'Success'
        }
    };
}
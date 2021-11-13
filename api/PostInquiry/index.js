const slack = require('./slack')
const inquiry = require('./inquiryDatabase')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    console.log(req)
    slack.sendMessage(req.body)

    await inquiry.addInquiry(req.body)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            message: 'Success'
        }
    };
}
const { IncomingWebhook } = require('@slack/webhook')
const WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL
const CHANNEL = process.env.SLACK_CHANNEL

exports.sendMessage = function(parameters) {
  let fields = Object.keys(parameters).map(key => {
    return {
      title: key,
      value: parameters[key],
      short: false
    }
  })

  const webhook = new IncomingWebhook(WEBHOOK_URL)

  webhook.send({
    channel: CHANNEL,
    attachments: [{
      text: 'お問い合わせ',
      fields: fields
    }]
  })
}
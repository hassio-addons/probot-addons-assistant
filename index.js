module.exports = probotPlugin

const wipBot=require('wip-bot');
const firstTimersBot=require('first-timers-bot');

function probotPlugin(robot) {
    wipBot(robot)
    firstTimersBot(robot)
}

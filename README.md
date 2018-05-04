# Community Hass.io Add-ons Assistant

![Project Stage][project-stage-shield]
![Project Maintenance][maintenance-shield]
[![GitHub Activity][commits-shield]][commits]
[![License][license-shield]](LICENSE.md)

[![Discord][discord-shield]][discord]
[![Community Forum][forum-shield]][forum]

## About

Community Hass.io Add-ons Assistant is a bot that helps the project by
doing all kind of administrative tasks on our PR' and issues.

This app was created using [Probot][probot].

## Installation

- Setup repository
  ```
  git clone git@github.com:hassio-addons/probot-addons-assistant.git
  cd probot-addons-assistant
  npm install
  ```
- Create your own GitHub app: [instructions][instructions]
- On your local machine, copy `.env.example` to `.env`.
- Go to [smee.io][smee] and click **Start a new channel**. Set `WEBHOOK_PROXY_URL` in `.env` to the URL that you are redirected to.
- [Create a new GitHub App][github-app] with:
  - **Webhook URL**: Use your `WEBHOOK_PROXY_URL` from the previous step.
  - **Webhook Secret**: `development`.
  - **Permissions & events**
    - Commit statuses **(read & write)**
    - Pull Requests **(read only)**
    - Subscribe to events **Pull request**
- Download the private key and move it to your project's directory. It will get picked up by Probot automatically.
- Edit `.env` and set `APP_ID` to the ID of the app you just created. The App ID can be found in your app settings page here
- Run `$ npm run dev` to start the server

See [Probot Deployment][deployment] documentation if you would like to run your own instance of this app.

## Support

Got questions?

You have several options to get them answered:

- The Home Assistant [Community Forum][forum], we have a
  [dedicated topic][forum] on that forum regarding this repository.
- The Home Assistant [Discord Chat Server][discord] for general Home Assistant
  discussions and questions.
- Join the [Reddit subreddit][reddit] in [/r/homeassistant][reddit]

You could also [open an issue here][issue] GitHub.

## Contributing

This is an active open-source project. We are always open to people who want to
use the code or contribute to it.

We have set up a separate document containing our
[contribution guidelines](CONTRIBUTING.md).

Thank you for being involved! :heart_eyes:

## Authors & contributors

The original setup of this repository is by [Franck Nijhof][frenck].

For a full list of all authors and contributors,
check [the contributor's page][contributors].

## License

MIT License

Copyright (c) 2018 Franck Nijhof

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[commits-shield]: https://img.shields.io/github/commit-activity/y/hassio-addons/probot-addons-assistant.svg
[commits]: https://github.com/hassio-addons/probot-addons-assistant/commits/master
[contributors]: https://github.com/hassio-addons/probot-addons-assistant/graphs/contributors
[discord-shield]: https://img.shields.io/discord/330944238910963714.svg
[discord]: https://discord.gg/c5DvZ4e
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg
[forum]: https://community.home-assistant.io/?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/probot-addons-assistant/issues
[keepchangelog]: http://keepachangelog.com/en/1.0.0/
[license-shield]: https://img.shields.io/github/license/hassio-addons/probot-addons-assistant.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2018.svg
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository
[instructions]: https://probot.github.io/docs/development/#configure-a-github-app
[smee]: https://smee.io
[github-app]: https://github.com/settings/apps/new
[deployment]: https://probot.github.io/docs/deployment/
[probot]: https://github.com/probot/probot
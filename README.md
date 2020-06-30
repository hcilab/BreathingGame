# Launching the Game with Breathing Sonar

This branch provides an example of how to incorporate breathing sonar controls into gameplay. However, since browsers can only access a user's microphone feed over https, several special steps must be taken to launch the game.


1. First, the game must be hosted using https (i.e., using SSL). The easiest tool that I've found to accomplish this is the node.js `http_server_ssl project. Assuming you've installed the tool (https://www.npmjs.com/package/http-server-ssl), the game server can be launched using the `./host.sh` script inlcuded in the project.


2. Secondly, most browsers deny access to unverified sites over https. In Google Chrome, you can bypass this for local https servers using the `chrome://flags/#allow-insecure-localhost` developer setting.


3. Finally, there are several considerations when using the breathing sonar tool. For best results, make sure that you:

	a) Use Google Chrome (for now)
	b) Accept the permission request for microphone access (this is required to process the sonar signal)
	c) Ensure that your computer's volume is unmuted and at a fairly high volume setting
	d) Position yourself fairly close to the computer speakers and mic during gameplay (e.g., 50 - 75cm)
	e) Avoid movement (i.e., your device or your body) and background noise when playing the game for best results


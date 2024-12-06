function inFrame()
{
	try {
		return window.self !== window.top;
	} catch (e) {
		return true;
	}
}

function logFrame()
{
	var frame = window.self.document.referrer,
	    hostname = window.self.location.hostname;
	if (!hostname) return;
	if (!frame) frame = 'UNKNOWN';

	// remove query string, limit length
	frame = frame.split('?')[0];
	frame = frame.substring(0, 256);

	ps$(function() {
		ps$.ajax({
			type: 'POST',
			url: '/ajax/logFrame',
			dataType: 'json',
			data: {
				FL_FRAME_URL: frame,
				FL_SITE_HOST: hostname
			}
		});
	});
}

if (inFrame()) logFrame();

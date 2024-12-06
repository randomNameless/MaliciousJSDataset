(function waitPrivacy() {
	if (window.tonikPrivacy) initPrivacy();
	else setTimeout(waitPrivacy, 100);
})();

function initPrivacy() {
	var enableIframes = window.tonikPrivacy.permissions.personalization_storage === 'granted';
	var iframeOrVideos = document.querySelectorAll('iframe[data-src],video[data-src]');
	if (iframeOrVideos.length > 0) {
		var img;
		if (!enableIframes) {
			img = document.createElement('div');
			img.classList.add('no-video-icon');
			var imgImg = document.createElement('img');
			imgImg.src = '/tonik-privacy/images/no-video.svg';
			img.appendChild(imgImg);
			var span = document.createElement('span');
			span.textContent = TONIK_PRIVACY.texts.accept_video;
			img.appendChild(span);
		}
		for (const iframeOrVideo of iframeOrVideos) {
			if (enableIframes) {
				iframeOrVideo.setAttribute('src', iframeOrVideo.getAttribute('data-src'));
			} else if (iframeOrVideo.tagName !== 'VIDEO' || !iframeOrVideo.poster) {
				iframeOrVideo.parentElement.style.position = 'relative';
				iframeOrVideo.insertAdjacentElement('afterend', img.cloneNode(true));
			}
		}
	}

	var enableFbPixel = window.tonikPrivacy.permissions.facebook_consent === 'granted';
	if (enableFbPixel) {
		var script = document.querySelector("script[data-src*='connect.facebook.net']");
		if (script) {
			script.setAttribute('src', script.getAttribute('data-src'));
		}
	}

	var enableShareThis = window.tonikPrivacy.permissions.personalization_storage === 'granted';
	if (enableShareThis) {
		var script = document.querySelector("script[data-src*='sharethis.com']");
		if (script) {
			script.setAttribute('src', script.getAttribute('data-src'));
		}
	}
}

if (!sendEmail) {
	function sendEmail(strPrefix, strSuffix, strSubject, strBody) {
		if (navigator.userAgent.indexOf('MSIE') !== -1 || (navigator.appVersion && navigator.appVersion.indexOf('Trident/') > 0)) {
			/* Microsoft Internet Explorer detected in. */
			if (strSubject) {
				if (escape) strSubject = escape(strSubject);
				strSubject = decodeURIComponent(strSubject);
			}
			if (strBody) {
				if (escape) strBody = escape(strBody);
				strBody = decodeURIComponent(strBody);
			}
		}
		var strTo = strPrefix + '@' + strSuffix;
		console.debug(strTo);
		if (strSubject != null || strBody != null) {
			strTo = strTo + '?';
			if (strSubject) {
				strTo += 'subject=' + strSubject;
			}
			console.debug(strTo);
			if (strBody) {
				if (strSubjec) strTo = strTo + '&';
				strTo += 'body=' + strBody;
			}
			console.debug(strTo);
		}
		console.debug('mailto:' + strTo);
		location.href = 'mailto:' + strTo;
	}
}

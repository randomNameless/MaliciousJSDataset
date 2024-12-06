(() => {
	console.log("LM");

	const elementMap = new Map();

	const actionTypes = {
		META_TITLE: "META_TITLE",
		META_DESCRIPTION: "META_DESCRIPTION",
		EXTERNAL_LINK: "EXTERNAL_LINK",
		CANONICAL_LINK: "CANONICAL_LINK",
		IMG_TAG: "IMG_TAG",
		LINKING: "LINKING"
	};

	const removeElementsByType = (type) => {
		let selector = null;
		switch (type) {
			case actionTypes.META_TITLE:
				selector = "title";
				break;
			case actionTypes.META_DESCRIPTION:
				selector = "meta[name=description]";
				break;
			case actionTypes.CANONICAL_LINK:
				selector = "link[rel=canonical]";
				break;
			default:
				return;
		}
		let elements = document.querySelectorAll(selector);
		elements.forEach((element) => element.remove());
	};

	const createElementByType = (action) => {
		let element = null;
		switch (action.category) {
			case actionTypes.META_TITLE:
				element = document.createElement("title");
				element.innerText = action.value;
				break;
			case actionTypes.META_DESCRIPTION:
				element = document.createElement("meta");
				element.setAttribute("name", "description");
				element.setAttribute("content", action.value);
				break;
			case actionTypes.CANONICAL_LINK:
				element = document.createElement("link");
				element.setAttribute("rel", "canonical");
				element.setAttribute("href", action.value);
				break;
			default:
				return;
		}
		let firstChild = document.head.childNodes[0];
		document.head.insertBefore(element, firstChild);
	};

	const handleExternalLinks = (action) => {
		action.value?.forEach((link) => {
			if (link.link) {
				document
					.querySelectorAll(`[href="${link.link}"]`)
					.forEach((element) => {
						if (element) {
							element.setAttribute("target", "_blank");
						}
					});
			} else {
				let element = document.querySelector(action.selector);
				if (element) {
					element.setAttribute("target", "_blank");
				}
			}
		});
	};

	function removeQueryParamsFromURL(url) {
		const parts = url.split("?");
		return parts[0];
	}

	const getImagesWithPartialMatch = (src) => {
		const partialImageUrlToFind = removeQueryParamsFromURL(src);
		const images = document.getElementsByTagName("img");
		const matchedImages = [];

		Array.from(images).forEach(function (image) {
			if (image.src.startsWith(partialImageUrlToFind)) {
				matchedImages.push(image);
			}
		});
		return matchedImages;
	};

	const handleImageTags = (action) => {
		action.value?.forEach((image) => {
			if (image.src) {
				let imagesList = document.querySelectorAll(
					`[src="${image.src}"]`
				);

				if (!imagesList.length)
					imagesList = getImagesWithPartialMatch(image.src);

				imagesList.forEach((element) => {
					if (element) {
						element.setAttribute("alt", image.value);
					}
				});
			} else {
				let element = document.querySelector(action.selector);
				if (element) {
					element.setAttribute("alt", image.value);
				}
			}
		});
	};

	const handleParagraphHash = async (action) => {
		let startTime = +new Date();
		await generateParagraphHash();

		action.value?.forEach((e) => {
			let { keyword, recommendation, paragraph_hash } = e;
			let type = elementMap.get(paragraph_hash);
			if (type) {
				let regex = new RegExp("\\b(" + keyword + ")\\b", "gi");
				let elements = E(type);
				try {
					elements.forEach((element) => {
						let textNodes = [];
						let textContent = element.nodeValue;
						let match;
						let lastIndex = 0;
						while ((match = regex.exec(textContent)) !== null) {
							textNodes.push(
								i(textContent.substring(lastIndex, match.index))
							);
							textNodes.push(u(match[0], recommendation));
							lastIndex = match.index + match[0].length;
							break;
						}
						if (lastIndex > 0) {
							textNodes.push(i(textContent.substring(lastIndex)));
							insertTextNodes(textNodes, element);
							throw "";
						}
					});
				} catch (e) {}
			}
		});

		console.log((+new Date() - startTime) / 1000);
	};

	const insertTextNodes = (nodes, target) => {
		let parent = target.parentNode;
		nodes.forEach((node) => {
			parent.insertBefore(node, target);
		});
		parent.removeChild(target);
	};

	const i = (text) => {
		return document.createTextNode(text);
	};

	const u = (text, recommendation) => {
		let link = document.createElement("a");
		link.style.textDecoration = "underline";
		link.innerText = text;
		link.href = recommendation;
		return link;
	};

	const E = (type) => {
		let textNodes = [];
		const processNodes = (node) => {
			if (node.nodeType === Node.TEXT_NODE) {
				textNodes.push(node);
			} else {
				for (let i = 0; i < node.childNodes.length; i++) {
					processNodes(node.childNodes[i]);
				}
			}
		};
		processNodes(type);
		return textNodes;
	};

	const generateParagraphHash = async () => {
		let elements = [...document.getElementsByTagName("p")];
		await Promise.all(
			elements.map(async (element) => {
				let textEncoder = new TextEncoder();
				let text = textEncoder.encode(element.textContent);
				try {
					let hash = await window.crypto.subtle.digest("SHA-1", text);
					let hashArray = Array.from(new Uint8Array(hash));
					let hashString = hashArray
						.map((byte) => byte.toString(16))
						.join("");
					elementMap.set(hashString, element);
				} catch (error) {
					console.error("Error generating hash:", error);
				}
			})
		);
	};

	(async () => {
		try {
			let response = await fetch(
				`https://prod-cdn.webtune.ai/prod/scalenut/${encodeURIComponent(
					encodeURIComponent(window.location.hostname)
				)}/${encodeURIComponent(
					encodeURIComponent(
						"https://" +
							window.location.hostname +
							window.location.pathname
					)
				)}/changes.json`
			);
			if (response.status === 200) {
				let actions = await response.json();
				const handleActions = () => {
					actions.forEach((action) => {
						let type = action.category;
						switch (type) {
							case actionTypes.META_TITLE:
							case actionTypes.META_DESCRIPTION:
							case actionTypes.CANONICAL_LINK:
								removeElementsByType(type);
								createElementByType(action);
								break;
							case actionTypes.EXTERNAL_LINK:
								handleExternalLinks(action);
								break;
							case actionTypes.IMG_TAG:
								handleImageTags(action);
								break;
							case actionTypes.LINKING:
								handleParagraphHash(action);
						}
					});
					document.scalenutWebTunedEmitted = true;
					let event = new CustomEvent("scalenutWebTuned");
					window.dispatchEvent(event);
				};
				if (document.readyState === "loading") {
					document.addEventListener(
						"DOMContentLoaded",
						handleActions
					);
				} else {
					handleActions();
				}
			} else {
				document.scalenutWebTunedEmitted = true;
				let errorEvent = new CustomEvent("scalenutWebTuned", {
					detail: { error: true }
				});
				window.dispatchEvent(errorEvent);
			}
		} catch (error) {
			document.scalenutWebTunedEmitted = true;
			let errorEvent = new CustomEvent("scalenutWebTuned", {
				detail: { error: error }
			});
			window.dispatchEvent(errorEvent);
		}
	})();
})();

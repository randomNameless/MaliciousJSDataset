import {clamp, pmod} from '../math.js'

/**
 * @type {m.FactoryComponent<{
 *  videos: {thumb: string; url: string; title: string; description: string}[]
 *  startIndex?: number
 * }>}
 */
export default function VideoGallery() {
	let index = 0
	/** @type {{url: string; title: string; description: string}[]} */
	let videos = []

	function next() {
		index = pmod(index + 1, videos.length)
	}
	function prev() {
		index = pmod(index - 1, videos.length)
	}

	return {
		oninit: v => {
			videos = v.attrs.videos
			// Did we get a starting index?
			index = clamp(v.attrs.startIndex != null ? v.attrs.startIndex : 0, 0, videos.length - 1)
		},
		onbeforeupdate: v => {
			videos = v.attrs.videos
			index = clamp(index, 0, videos.length - 1)
		},
		view: () => m('div',
			m('.modal-inner',
				m('.contain',
					m('p', `Video ${index+1} of ${videos.length}`)
				),
				m('.img-wrapper',
					m('div',
						m('button.btn-nav.prev',
							{
								onclick: prev,
								disabled: !(index > 0)
							},
							m('span'),
						),
						m('button.btn-nav.next',
							{
								onclick: next,
								disabled: !(index < videos.length - 1)
							},
							m('span'),
						)
					),
					m('.contain',
						m('.video-wrapper',
							m('iframe.iframe-video',
								{
									src: videos[index].url
								}
							)
						)
					)
				),
				m('.contain',
					m('h2.h4', videos[index].title),
					m('p', videos[index].description)
				)
			)
		)
	}
}

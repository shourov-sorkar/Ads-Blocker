const Filters = [
	"*://*.doubleclick.net/*",
	// "*://partner.googleadservices.com/*",
	// "*://*.googlesyndication.com/*",
	// "*://*.google-analytics.com/*",
	// "*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function() { return { cancel: true }},
    { urls: Filters },
    ["blocking"]
)
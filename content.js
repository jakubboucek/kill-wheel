(() => {
    let killed = false;
    const killer = (e) => {
        // Yep, nothing more. Events bubbling over DOM is propagated from the last registered event
        // The `stopPropagation()` is stop propagation event to another handlers except the default browser handler
        e.stopPropagation();
    };

    const toggle = (message) => {
        if (message !== 'toggle' || killed) return;

        killed = true;
        document.addEventListener('wheel', killer, {capture: true, passive: false});
        document.addEventListener('scroll', killer, {capture: true, passive: false});
        console.log("Wheel killer started on page: " + document.location.href);
    }

    chrome.runtime.onMessage.addListener(toggle);
})();

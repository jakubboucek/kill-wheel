(() => {
    let removed = false;
    const remover = (e) => {
        // Yep, nothing more. Events bubbling over DOM is propagated from the last registered event
        // The `stopPropagation()` is stop propagation event to another handlers except the default browser handler
        e.stopPropagation();
    };

    const toggle = (message) => {
        if (message !== 'toggle' || removed) return;

        removed = true;
        document.addEventListener('wheel', remover, {capture: true, passive: false});
        document.addEventListener('scroll', remover, {capture: true, passive: false});
    }

    chrome.runtime.onMessage.addListener(toggle);
})();

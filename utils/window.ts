interface OpenWindow {
    url: string;
    title?: string;
}

export const openWindow = ({url, title}: OpenWindow) => {
    const top = window.screenY + (window.outerHeight - window.innerHeight) / 2;
    const left = window.screenX + (window.outerWidth - window.innerWidth) / 2;

    return window.open(
        url,
        title,
        `dialog=yes, width=800, height=600, top=${top}, left=${left}, resizable=yes, scrollbars=yes`
    )
}

interface ObservableWindow {
    popup: Window;
    interval?: number;
    onClose: () => void;
}

export const observeWindow = ({popup, interval, onClose}: ObservableWindow) => {
    const intervalId = setInterval(() => {
        if (popup.closed) {
            clearInterval(intervalId);
            onClose();
        }
    }, interval || 1000)
}

function blackOutScreen(duration, messages, additional) {

    const blackout = document.createElement('div');
    blackout.style.position = 'fixed';
    blackout.style.top = '0';
    blackout.style.left = '0';
    blackout.style.width = '100%';
    blackout.style.height = '100%';
    blackout.style.backgroundColor = 'rgba(0, 0, 0)'; // Added transparency
    blackout.style.zIndex = '9999';
    blackout.style.display = 'flex';
    blackout.style.justifyContent = 'center';
    blackout.style.alignItems = 'center';
    blackout.style.transition = 'opacity 0.5s ease-in-out';


    const messageElement = document.createElement('h2');
    messageElement.style.color = 'white';
    blackout.appendChild(messageElement);

    let additionalElement;
    if (additional && additional.txt && additional.color) {
        additionalElement = document.createElement('h2');
        additionalElement.style.color = additional.color;
        blackout.appendChild(additionalElement);
    }


    document.body.appendChild(blackout);

    let messageIndex = 0;
    const intervalId = setInterval(() => {
        messageElement.textContent = messages[messageIndex % messages.length];
        if (additionalElement) {
            additionalElement.textContent = additional.txt[messageIndex % additional.txt.length];
        }
        messageIndex++;
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        blackout.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(blackout);
        }, 500);
    }, duration * 1000 - 500);
}

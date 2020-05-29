function KeyPressEvent() {
  const observers = [];

  function subscribe(fn) {
    observers.push(fn);
  }

  function notify(data) {
    observers.forEach((observer) => observer(data));
  }
  return {
    subscribe,
    notify,
  };
}

const handleKeyPressEvent = KeyPressEvent();

handleKeyPressEvent.subscribe((data) => console.log(data));

handleKeyPressEvent.notify("key pressed");
handleKeyPressEvent.notify("key pressed");

import posthog from 'posthog-js';

type Extras = { [key: string]: string | number | boolean };

export const captureEvent = (eventName: string, extras?: Extras) => {
  if (extras) {
    posthog.capture(eventName, extras);
  } else {
    posthog.capture(eventName);
  }
};

type OutboundEventProps = {
  clickEvent: React.MouseEvent<HTMLAnchorElement>;
  eventName: string;
  extras?: Extras;
};

export const captureOutboundEvent = ({
  clickEvent,
  eventName,
  extras,
}: OutboundEventProps) => {
  // Capture event
  captureEvent(eventName, extras);

  // If CTRL or CMD is pressed (to open the link in a new tab),
  // proceed using the browsers default action
  if (clickEvent.metaKey || clickEvent.ctrlKey) {
    return;
  }

  // Otherwise, stop the motherfucker
  clickEvent.preventDefault();

  const target = clickEvent.target as HTMLAnchorElement;
  // Small timeout to ensure that the event is captured
  // before following the link
  setTimeout(() => {
    document.location.href = target.href;
  }, 100);
};

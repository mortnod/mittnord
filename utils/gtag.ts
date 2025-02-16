const ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  // @ts-expect-error Added to window by external script. Will probably be deleted soon anyway
  window.gtag('config', ANALYTICS_ID, {
    page_path: url,
  });
};

type EventProps = {
  action: string;
  category: string;
  label?: string;
  value?: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventProps) => {
  // @ts-expect-error Added to window by external script. Will probably be deleted soon anyway
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

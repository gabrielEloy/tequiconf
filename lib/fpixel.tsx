export const FB_PIXEL_ID = "3536686016594795";

export const pageview = () => {
  // @ts-ignore
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: any, options = {}) => {
  // @ts-ignore
  window.fbq("track", name, options);
};

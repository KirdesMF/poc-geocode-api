const mapbox = {
  infos: [
    { label: 'Pricing', value: '$112,50/month for 250k requests/month' },
    { label: 'Rate limit', value: '600 requests per minute' },
    {
      label: 'Feature types',
      value: ['address', 'place'],
    },
    { label: 'Languages', value: '100' },
  ],
  links: [
    { label: 'Documentation', url: 'https://docs.mapbox.com/api/search/geocoding/' },
    { label: 'Pricing', url: 'https://www.mapbox.com/pricing/' },
    { label: 'Languages', url: 'https://www.mapbox.com/pricing/' },
  ],
};

const radar = {
  infos: [
    { label: 'Pricing', value: '$1000/month for 250k requests/month' },
    { label: 'Rate limit', value: '40 requests per second' },
    { label: 'Feature types', value: ['address', 'place'] },
    { label: 'Languages', value: '100' },
  ],
  links: [
    { label: 'Documentation', url: 'https://radar.com/documentation/api#geocoding' },
    { label: 'Pricing', url: 'https://radar.com/pricing' },
  ],
};

const maptiler = {
  infos: [
    { label: 'Pricing', value: '$1000/month for 250k requests/month' },
    { label: 'Rate limit', value: '40 requests per second' },
    { label: 'Feature types', value: ['address', 'place'] },
    { label: 'Languages', value: '100' },
  ],
  links: [
    { label: 'Documentation', url: 'https://docs.maptiler.com/cloud/api/geocoding/' },
    { label: 'Pricing', url: 'https://www.maptiler.com/pricing/' },
  ],
};

const opencage = {
  infos: [
    { label: 'Pricing', value: '$1000/month for 250k requests/month' },
    { label: 'Rate limit', value: '40 requests per second' },
    { label: 'Feature types', value: ['address', 'place'] },
    { label: 'Languages', value: '100' },
  ],
  links: [
    { label: 'Documentation', url: 'https://opencagedata.com/api' },
    { label: 'Pricing', url: 'https://opencagedata.com/pricing' },
  ],
};

const here = {
  infos: [
    { label: 'Pricing', value: '$1000/month for 250k requests/month' },
    { label: 'Rate limit', value: '40 requests per second' },
    { label: 'Feature types', value: ['address', 'place'] },
    { label: 'Languages', value: '100' },
  ],
  links: [
    {
      label: 'Documentation',
      url: 'https://www.here.com/docs/bundle/geocoding-and-search-api-v7-api-reference/page/index.html',
    },
    { label: 'Pricing', url: 'https://www.here.com/pricing' },
  ],
};

export const DATA = { mapbox, radar, maptiler, opencage, here };

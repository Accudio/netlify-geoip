# Netlify GeoIP

Returns [Netlify's Geolocation context](https://docs.netlify.com/edge-functions/api/#netlify-specific-context-object) back on requests for a simple GeoIP service without tracking.

Demo at [accudio-geoip.netlify.app](https://accudio-geoip.netlify.app)

Exposes:

- `city`
- `country` — `code` and `name`
- `subdivision` — `code` and `name`
- `timezone`
- `latitude`
- `longitude`
- `ip`

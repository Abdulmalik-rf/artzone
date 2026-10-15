export const WA_NUMBER = '966535738136'
export const WA_DISPLAY = '+966 53 573 8136'
export const PHONE_HREF = 'tel:+966535738136'

// ARTZONE PRINTING listing on Google Maps (18th Street, Al Badiyah, Dammam)
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=ARTZONE+PRINTING&query_place_id=ChIJf7zmfxv9ST4RpyzYSjUT70M'

export const MAPS_EMBED = 'https://www.google.com/maps?q=26.4313401,50.0963457&z=17&output=embed'

export function waLink(text) {
  return `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`
}

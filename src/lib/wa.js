export const WA_NUMBER = '966535738136'
export const WA_DISPLAY = '+966 53 573 8136'
export const PHONE_HREF = 'tel:+966535738136'

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=18th+Street%2C+Al+Badiyah%2C+Dammam+32243'

export const MAPS_EMBED =
  'https://www.google.com/maps?q=18th+Street,+Al+Badiyah,+Dammam+32243&z=15&output=embed'

export function waLink(text) {
  return `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`
}

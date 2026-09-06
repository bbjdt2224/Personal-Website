// Hobbies section config.
// Each hobby shows as a card. Clicking opens a photo carousel dialog.
// Photos: place images in /images/hobbies/<hobby-id>/, or set `src` on a
// photo to point elsewhere (used below to reuse photos from the Travel map).
// Each photo can have its own caption, date, and details shown in the carousel footer.

import { travelLocations } from './travel'

// Backpacking/hiking trips also shown on the Travel map — reused here instead of duplicated.
const BACKPACKING_LOCATION_IDS = ['pictured-rocks', 'adirondacks', 'smokies']

function photosFromTravel(ids, { exclude = false } = {}) {
  return travelLocations
    .filter(loc => exclude ? !ids.includes(loc.id) : ids.includes(loc.id))
    .flatMap(loc => loc.photos.map(p => ({
      ...p,
      caption: p.caption || loc.name,
      src: `/images/travel/${loc.id}/${p.file}`,
    })))
}

export const hobbies = [
  {
    id: 'baking',
    name: 'Baking',
    emoji: '🍞',
    description: 'Sourdough, croissants, babka — baking is my meditation. There\'s something deeply satisfying about turning flour and time into something beautiful.',
    color: '#c75c2f',
    photos: [
      { file: 'IMG_1185.JPEG', date: '2020-06' },
      { file: 'IMG_1191.JPEG', date: '2020-06' },
      { file: 'IMG_1664.JPEG', date: '2021-04' },
      { file: 'IMG_0006.JPEG', date: '2021-06' },
      { file: '64695168492__8AA59BD1-4C60-4E2A-B5A8-14352038B224.fullsizerender.JPEG', date: '2021-07' },
      { file: 'IMG_0255.JPEG', date: '2021-11' },
      { file: 'IMG_1094.JPEG', date: '2023-05' },
      { file: 'IMG_1122.JPEG', date: '2023-06' },
      { file: 'IMG_2065.JPEG', date: '2024-09' },
      { file: 'IMG_2070.JPEG', date: '2024-09' },
      { file: 'IMG_2080.JPEG', date: '2024-10' },
      { file: 'IMG_2231.JPEG', date: '2024-12' },
      { file: 'IMG_2311.JPEG', date: '2025-02' },
      { file: 'IMG_2661.JPEG', date: '2025-08' },
      { file: 'IMG_2672.JPEG', date: '2025-08' },
      { file: 'IMG_2838.JPEG', date: '2025-09' },
      { file: 'IMG_2933.JPEG', date: '2025-10' },
      { file: 'IMG_3196.JPEG', date: '2025-11' },
      { file: 'IMG_3207.JPEG', date: '2025-11' },
      { file: 'IMG_3270.JPEG', date: '2025-12' },
      { file: 'IMG_3534.JPEG', date: '2026-04' },
      { file: 'lp_image.JPEG' },
    ],
  },
  {
    id: 'backpacking',
    name: 'Backpacking',
    emoji: '🏔️',
    description: 'Multi-day trips into the backcountry — the Adirondacks, the Smokies, wherever the trail leads. No cell service, no noise, just the outdoors.',
    color: '#2d6a4f',
    photos: photosFromTravel(BACKPACKING_LOCATION_IDS),
  },
  {
    id: 'disney',
    name: 'Disney Fan',
    emoji: '🏰',
    description: 'Annual passholder who knows the parks a little too well. There\'s a special kind of magic in Disney that keeps pulling me back.',
    color: '#1e3a8a',
    photos: [
      { file: 'IMG_0629.JPEG', date: '2022-05' },
      { file: 'IMG_0957.JPEG', date: '2023-01' },
      { file: 'IMG_0961.JPEG', date: '2023-01' },
      { file: 'IMG_0962.JPEG', date: '2023-01' },
      { file: 'Facetune_16-03-2023-22-20-31.JPEG', date: '2023-03' },
      { file: 'IMG_0984.JPEG', date: '2023-07' },
      { file: 'Facetune_10-09-2023-19-40-15.JPEG', date: '2023-09' },
      { file: 'Facetune_25-10-2023-21-49-13.JPEG', date: '2023-10' },
      { file: 'Facetune_25-10-2023-21-54-23.JPEG', date: '2023-10' },
      { file: 'IMG_1394.JPEG', date: '2023-10' },
      { file: 'IMG_1588.JPEG', date: '2024-01' },
      { file: 'IMG_2158.JPEG', date: '2024-11' },
      { file: 'IMG_2282.JPEG', date: '2025-01' },
      { file: 'IMG_2371.JPEG', date: '2025-03' },
      { file: 'IMG_3948.JPEG', date: '2026-08' },
      { file: '0219A615-A0FC-4A56-B97A-11335993F3A7.jpg' },
      { file: '40D8C712-8844-442B-A404-52EDDF139E59.jpg' },
      { file: 'C46E79F6-430B-48E9-8CD6-A19B71609354.jpg' },
      { file: 'DA5108FB-E4F2-471F-96B0-A5FAF242A75D.jpg' },
      { file: 'F34D5200-4D29-473A-A8EF-FA64B704CD15.jpg' },
      { file: 'IMG_0238.JPEG' },
      { file: 'IMG_0655.JPG' },
      { file: 'IMG_0951.JPG' },
      { file: 'IMG_1146.JPEG' },
      { file: 'IMG_1155.JPG' },
      { file: 'IMG_1608.JPEG' },
    ],
  },
  {
    id: 'world-traveler',
    name: 'World Traveler',
    emoji: '🌍',
    description: 'Chasing new stamps in my passport and stories worth retelling. There\'s nothing like landing somewhere unfamiliar and figuring it out as you go.',
    color: '#1a6b8a',
    photos: photosFromTravel(BACKPACKING_LOCATION_IDS, { exclude: true }),
  },
  {
    id: 'kickball',
    name: 'Kickball',
    emoji: '🔴',
    description: 'Team captain of a rec league kickball team in Tampa. Turns out adult recreational sports are just an excuse to hang out with great people.',
    color: '#7c3aed',
    photos: [
      { file: '94F28BAC-875C-41ED-A8E8-6307E81DEDC2.JPEG', date: '2022-12' },
      { file: 'IMG_1375.JPEG', date: '2023-10' },
      { file: 'IMG_1381.JPEG', date: '2023-10' },
      { file: 'IMG_0473.JPEG', date: '2023-11' },
      { file: 'IMG_0430.JPEG', date: '2024-03' },
      { file: 'IMG_0845.JPEG', date: '2024-04' },
      { file: 'IMG_2176.JPEG', date: '2024-11' },
      { file: 'IMG_9960.JPEG', date: '2024-11' },
      { file: 'IMG_7612.JPEG', date: '2025-04' },
      { file: 'IMG_7596.JPEG', date: '2025-11' },
      { file: '20260419_152534.JPEG', date: '2026-04' },
      { file: '1000041163.JPEG' },
      { file: 'IMG_1356.JPEG' },
    ],
  },
  {
    id: 'running',
    name: 'Running',
    emoji: '🏃',
    description: 'Races and the occasional longer run. Running clears my head better than anything else — especially after a long debugging session.',
    color: '#b45309',
    photos: [
      { file: 'IMG_2321.JPEG', date: '2025-02' },
      { file: 'IMG_2771.JPEG', date: '2025-09' },
      { file: 'IMG_2911.JPEG', date: '2025-10' },
      { file: 'IMG_3060.JPEG', date: '2025-10' },
      { file: 'IMG_3373.JPEG', date: '2026-01' },
      { file: 'IMG_3385.JPEG', date: '2026-01' },
      { file: 'IMG_3406.JPEG', date: '2026-01' },
      { file: 'IMG_3435.JPEG', date: '2026-02' },
      { file: 'IMG_3445.JPEG', date: '2026-02' },
      { file: 'IMG_3462.JPEG', date: '2026-02' },
      { file: 'IMG_3500.JPEG', date: '2026-03' },
      { file: 'IMG_0226.JPEG' },
    ],
  },
]

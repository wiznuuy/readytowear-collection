export type Theme = {
  name: string
  photos: string[]
}

export type Designer = {
  id: string
  name: string
  instagramHandle: string
  instagramUrl: string
  email: string
  themes: Theme[]
}

const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1)
const pad = (n: number) => String(n).padStart(3, '0')

export const designers: Designer[] = [
  {
    id: 'lsj',
    name: '이서진',
    instagramHandle: '@oseozn',
    instagramUrl: 'https://instagram.com/oseozn',
    email: 'oxeozn@gmail.com',
    themes: [
      { name: 'Homme', photos: range(5).map(n => `runway_lsj_homme${pad(n)}.jpeg`) },
      { name: 'Japanese', photos: range(10).map(n => `runway_lsj_japanese${pad(n)}.jpeg`) },
      { name: 'Identity', photos: range(4).map(n => `runway_lsj_identity${pad(n)}.jpeg`) },
    ],
  },
  {
    id: 'bmj',
    name: '백민준',
    instagramHandle: '@worsho.d',
    instagramUrl: 'https://instagram.com/worsho.d',
    email: 'bmj4385@gmail.com',
    themes: [
      { name: 'Homme', photos: range(5).map(n => `runway_bmj_homme${pad(n)}.jpeg`) },
      { name: 'Japanese', photos: range(5).map(n => `runway_bmj_japanese${pad(n)}.jpeg`) },
      { name: 'Identity', photos: range(6).map(n => `runway_bmj_identity${pad(n)}.jpeg`) },
    ],
  },
  {
    id: 'lth',
    name: '이태현',
    instagramHandle: '@otaeen',
    instagramUrl: 'https://instagram.com/otaeen',
    email: '',
    themes: [
      { name: 'Homme', photos: range(5).map(n => `runway_lth_homme${pad(n)}.jpeg`) },
      { name: 'Japanese', photos: range(8).map(n => `runway_lth_japanese${pad(n)}.jpeg`) },
      { name: 'Identity', photos: range(3).map(n => `runway_lth_identity${pad(n)}.jpeg`) },
    ],
  },
  {
    id: 'kgm',
    name: '김경민',
    instagramHandle: '@patinaarchlve',
    instagramUrl: 'https://instagram.com/patinaarchlve',
    email: 'atsuki0427@naver.com',
    themes: [
      { name: 'Homme', photos: range(6).map(n => `runway_kgm_homme${pad(n)}.jpeg`) },
      { name: 'Japanese', photos: range(3).map(n => `runway_kgm_japanese${pad(n)}.jpeg`) },
      { name: 'Identity', photos: range(3).map(n => `runway_kgm_identity${pad(n)}.jpeg`) },
    ],
  },
  {
    id: 'hjh',
    name: '홍준호',
    instagramHandle: '@pc.hongjunho',
    instagramUrl: 'https://instagram.com/pc.hongjunho',
    email: 'hroffjfl@gmail.com',
    themes: [
      { name: 'Homme', photos: range(9).map(n => `runway_hjh_homme${pad(n)}.jpeg`) },
      { name: 'Japanese', photos: range(5).map(n => `runway_hjh_japanese${pad(n)}.jpeg`) },
      { name: 'Identity', photos: range(4).map(n => `runway_hjh_identity${pad(n)}.jpeg`) },
    ],
  },
  {
    id: 'kgw',
    name: '김근우',
    instagramHandle: '@k_workpiece',
    instagramUrl: 'https://instagram.com/k_workpiece',
    email: 'moonst51@naver.com',
    themes: [
      { name: 'Homme', photos: range(4).map(n => `runway_kgw_homme${pad(n)}.jpeg`) },
      { name: 'Japanese', photos: range(5).map(n => `runway_kgw_japanese${pad(n)}.jpeg`) },
      { name: 'Identity', photos: range(3).map(n => `runway_kgw_identity${pad(n)}.jpeg`) },
    ],
  },
]

export const backstagePhotos = range(30).map(n => `backstage${pad(n)}.jpeg`)

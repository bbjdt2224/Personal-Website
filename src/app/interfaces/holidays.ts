export const Holidays: Holiday[] = [
    {
        title: 'New Years Day',
        date: '01/01',
        image: 'new-years.jpeg'
    },
    {
        title: 'MLK Day',
        date: '01/15',
        image: 'mlk.jpeg'
    },
    {
        title: 'Presidents Day',
        date: '02/19',
        image: 'presidents.jpeg'
    },
    {
        title: 'Easter Sunday',
        date: '03/31',
        image: 'easter.jpeg'
    },
    {
        title: 'Memorial Day',
        date: '05/27',
        image: 'memorial.jpeg'
    },
    {
        title: 'Juneteenth',
        date: '06/19',
        image: 'juneteenth.jpeg'
    },
    {
        title: 'Independance Day',
        date: '07/04',
        image: 'independance.jpeg'
    },
    {
        title: 'Labor Day',
        date: '09/02',
        image: 'labor.jpeg'
    },
    {
        title: 'Veterans Day',
        date: '11/11',
        image: 'veterans.jpeg'
    },
    {
        title: 'Thanksgiving',
        date: '11/28',
        image: 'thanksgiving.jpeg'
    },
    {
        title: 'Christmas',
        date: '12/25',
        image: 'christmas.jpeg'
    },
]

export interface Holiday {
    title: string
    date: string,
    image: string,
    daysUntil?: number
}
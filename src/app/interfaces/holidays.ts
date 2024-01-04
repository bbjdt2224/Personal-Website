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
        title: 'Groundhog Day',
        date: '02/02',
        image: 'groundhog.jpeg'
    },
    {
        title: 'Mardi Gras',
        date: '02/13',
        image: 'mardi-gras.jpeg'
    },
    {
        title: 'Valentines Day',
        date: '02/14',
        image: 'valentines.jpeg'
    },
    {
        title: 'Presidents Day',
        date: '02/19',
        image: 'presidents.jpeg'
    },
    {
        title: 'St. Patricks Day',
        date: '03/17',
        image: 'st-patricks.jpeg'
    },
    {
        title: 'Easter Sunday',
        date: '03/31',
        image: 'easter.jpeg'
    },
    {
        title: 'Cinco de Mayo',
        date: '05/05',
        image: 'cinco-de-mayo.jpeg'
    },
    {
        title: 'Mothers Day',
        date: '05/12',
        image: 'mothers.jpeg'
    },
    {
        title: 'Memorial Day',
        date: '05/27',
        image: 'memorial.jpeg'
    },
    {
        title: 'Fathers Day',
        date: '06/16',
        image: 'fathers.jpeg'
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
        title: 'Halloween',
        date: '10/31',
        image: 'halloween.jpeg'
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
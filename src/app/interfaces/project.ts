export interface Project {
    imgSrc: string,     
    name: string,
    date: string,
    medium: string,
    place?: string
    desc?: string,
    buttonList: {
        type: string,
        link: string
    }[]
}
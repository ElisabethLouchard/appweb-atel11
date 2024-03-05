import { DateTime } from "luxon"

export interface Post {
    id: string
    title: string
    created: string
}

export const today: Post = {
    id: "1",
    title: "Aujourd'hui",
    created: DateTime.now().toISO()
}  

export const thisWeek: Post = {
    id: "2",
    title: "Cette semaine",
    created: DateTime.now().minus({ days : 5 }).toISO()
}
        
export const thisMonth: Post = {
    id: "3",
    title: "Ce mois",
    created: DateTime.now().minus({ weeks : 3 }).toISO()
}

export interface TimelinePost extends Omit<Post, 'created'>{
    created: DateTime
}
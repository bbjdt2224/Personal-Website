export interface AirtableResponse<T> {
    records: AirtableRecord<T>[]
}

interface AirtableRecord<T> {
    id: string,
    createdTime: string,
    fields: T
}

export interface ToDoItem {
    Name: string,
    Complete?: boolean
}
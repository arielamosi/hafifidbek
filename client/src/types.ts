export type Recipe = {
    'id': number,
    'name': string,
    'imgUrl': string,
    'tags': string[],
    'stars': number[],
};

export interface Data {
    [key: string]: unknown
}

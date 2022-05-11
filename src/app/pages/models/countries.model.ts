export interface Countries {
    code: string,
    name: string,
}

export interface CountryHoliday {

    date: string,
    name: string,
    local_name: string,
    country_code: string,
    regions: Array<string>,
    types: Array<string>

}
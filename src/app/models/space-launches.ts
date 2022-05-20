export interface ISpaceLaunches {
    id: string,
    url: string,
    launch_library_id: number,
    slug: string,
    name: string,
    status:{
        id: number,
        name: string
    },
    net: string,
    window_end: string,
    window_start: string,
    inhold: boolean,
    tbdtime: boolean,
    tbddate: boolean,
    probability: number,
    holdreason: string,
    failreason: string,
    hashtag: string,
    launch_service_provider:{
        id: number,
        url: string,
        name: string,
        type: string
    },
    rocket:{
        id: number,
        configuration:{
            id: number,
            launch_library_id: number,
            url: string,
            name: string,
            family: string,
            full_name: string,
            variant: string
        }
    },
    mission: string,
    pad:{
        id: number,
        url: string,
        agency_id: string,
        name: string,
        info_url: string,
        wiki_url: string,
        map_url: string,
        latitude: string,
        longitude: string,
        location:{
            id: number,
            url: string,
            name: string,
            country_code: string,
            map_image: string,
            total_launch_count: number,
            total_landing_count: number
        },
        map_image: string,
        total_launch_count: number
    },
    webcast_live: boolean,
    image: string,
    infographic: string
}

export interface HelpCategory {
    sys: {
        id?: string,
    },
    fields: {
        slug: string,
        description: string,
        title: string
    }
}

export interface Help {
    sys: {
        id?: string,
    },
    fields: {
        slug: string,
        description: string,
        content: string,
        category?: HelpCategory,
        title: string,
        image: Object
    }
}

export interface Helps {
    data?: Help[]
}

export interface HelpCategories {
    data?: HelpCategory[]
}

export interface HelpCategoryRouteInterface {
    params: {
        collection?: string | string[]
    }
}

export interface ResultStructure {
    to: string,
    label: string,
    content: string
}

export interface ParentScope {
  to: string,
  label: string
}

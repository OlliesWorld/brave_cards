export default {
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'alias',
            title: 'Alias',
            type: 'string',
        },
        {
            name: 'origin',
            title: 'Origin',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Real', value: 'real'},
                    {title: 'Fictional', value: 'fictional'},
                    // {title: 'Fantasy', value: 'fantasy' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'power',
            title: 'Power',
            type: 'string',
        },
       
            {
                name: 'theWhy',
                title: 'The Why',
                type: 'string',
            },
            {
                name: 'quotes',
                title: 'Quotes',
                type: 'document',
                fields: [
                    {
                        name: 'quote1',
                        title: 'Quote 1',
                        type: 'string',
                    },
                    {
                        name: 'quote2',
                        title: 'Quote 2',
                        type: 'string',
                    },
                    {
                        name: 'quote3',
                        title: 'Quote 3',
                        type: 'string',
                    },
                    {
                        name: 'quote4',
                        title: 'Quote 4',
                        type: 'string',
                    },
                ]
            },
            {
                name: 'mainImage',
                title: 'Main Image',
                type: 'image',
                options: {
                    hotspot: true,
                },
            },
            {
                name: 'images',
                title: 'Images',
                type: 'array',
                of: [{type: 'moreImage'}]
            },
            {
                name: 'reign',
                title: 'Reign',
                type: 'string',
                description: 'time period of Inspiration'
            },
                    {
                        name: 'resourceLink1',
                        title: 'Resource Link 1',
                        type: 'url',
                    },
                    {
                        name: 'resourceLink2',
                        title: 'Resource Link 2',
                        type: 'url',
                    },
                    {
                        name: 'resourceLink3',
                        title: 'Resource Link 3',
                        type: 'url',
                    },
                    {
                        name: 'resourceLink4',
                        title: 'Resource Link 4',
                        type: 'url',
                    },
            
            {
                name: 'creator',
                title: 'Creator',
                type: 'creator',
                
                },
                {
                    name: 'slug',
                    title: 'Slug',
                    type: 'slug',
                    options: {
                        source: 'name',
                        maxLength: 100,
                    },
                },
                {
                    name: 'id',
                    title: 'ID',
                    type: 'number'
                },
    ]
}
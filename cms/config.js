export default {
    cms_manual_init: true,
    backend: {
        //   name: 'github',
        //   repo: 'lukortech/next-tryout',
        //   branch: 'main',
        name: "git-gateway"
    },
    local_backend: true,
    media_folder: 'public/img',
    public_folder: 'img',
     slug: {
        clean_accents: true,
    },
    collections: [
        {
            name: 'artists',
            label: 'Artists',
            label_singular: 'Artist',
            folder: 'content/artists/',
            create: true,
            display_url: 'http://localhost:3000/artists/',
            preview_path: "{{genre}}/{{name}}",
            slug: "{{genre}}-{{name}}-{{formed}}-{{lastActive}}",
            fields: [
                { 
                    name: "name", 
                    label: "Name",
                    widget: "string", 
                },
                {
                    name: "genre",
                    label: "Genre",
                    widget: "string"
                },
                {
                    name: "formed",
                    label: "Formed",
                    widget: "date",
                    format: 'YY'
                },
                {
                    name: "lastActive",
                    label: "Last Active",
                    widget: "date",
                    format: 'YY'
                },
                {
                    label: "Body", 
                    name: "body", 
                    widget: "markdown"
                }
            ]
        },
        {
            name: 'albums',
            label: 'Albums',
            folder: 'content/albums/',
            create: true,
            slug: "{{released}}-{{name}}",
            fields: [
                { name: "name", label: "Name", widget: "string" },
                { name: "released", label: "Released", widget: "date", format: 'MM-YY' },
                { name: "numberOfSongs", label: "Number of songs", widget: "number", min: 1 },
                {
                    name: "author",
                    label: "Author",
                    widget: "relation",
                    collection: "artists",
                    search_fields: ["name", "genre"],
                    value_field: "name",
                    display_fields: ["name"],
                }
            ]
        },
        {
            name: 'songs',
            label: 'Songs',
            folder: 'content/songs/',
            create: true,
            slug: "{{album}}-{{name}}",
            fields: [
                { name: "name", label: "Title", widget: "string" },
                { name: "duration", label: "Duration (s)", widget: "number" },
                { name: "body", label: "Lyrics", widget: "markdown" },
                {
                    name: "album",
                    label: "Album",
                    widget: "relation",
                    collection: "albums",
                    search_fields: ["name", "author"],
                    value_field: "name",
                    display_fields: ["name"],
                }
            ]
        },
    ],
};
import {RouterTemplate, useHeade, useTags, usePages} from "./lib/index.js"

const pages = await usePages()
const component = await useTags()



function main (){
        useHeade({settings: `<link rel="stylesheet" href="./src/styles/Container.css"><link rel="stylesheet" href="./src/styles/Desktop.css">`})

        RouterTemplate(pages, component)

}

main()




//setInterval(main, 5000)
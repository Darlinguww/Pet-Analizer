import { getManyDogImages } from "./api"
import { rl } from "./types"
import type { Doimage } from "./types"

async function main() {

    rl.question("¿Cuántas imágenes de perros quieres obtener? ", async (answer) => {

        const count = Number(answer)

        const images: Doimage[] = await getManyDogImages(count)

        console.log("\nImágenes obtenidas:")
        console.log(images)

        // MAP
        const urls = images.map(img => img.url)
        console.log("\nMAP → solo URLs")
        console.log(urls)

        // FILTER
        const hounds = images.filter(img => img.url.includes("hound"))
        console.log("\nFILTER → imágenes con 'hound'")
        console.log(hounds)

        // FIND
        const bulldog = images.find(img => img.url.includes("bulldog"))
        console.log("\nFIND → primera imagen bulldog")
        console.log(bulldog)

        // SOME
        const hasTerrier = images.some(img => img.url.includes("terrier"))
        console.log("\nSOME → ¿existe terrier?")
        console.log(hasTerrier)

        // EVERY
        const allJpg = images.every(img => img.url.endsWith(".jpg"))
        console.log("\nEVERY → ¿todas son .jpg?")
        console.log(allJpg)

        // SORT
        const sorted = [...images].sort((a, b) => a.url.localeCompare(b.url))
        console.log("\nSORT → ordenadas por URL")
        console.log(sorted)

        // REDUCE
        const byBreed = images.reduce((acc, img) => {

            const parts = img.url.split("/")
            const breed = parts[4] ?? "unknown"

            acc[breed] = (acc[breed] || 0) + 1

            return acc

        }, {} as Record<string, number>)

        console.log("\nREDUCE → conteo por raza")
        console.log(byBreed)

        rl.close()
    })

}

main()
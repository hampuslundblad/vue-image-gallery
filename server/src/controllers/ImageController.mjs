import * as FlickrService from '../services/FlickrService.mjs'

export async function searchImage(req, res) {
  try {
      const images = await FlickrService.searchImages("nature")
    return res.send({"images":images})
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      error: "An error has occured",
    });
  }
}

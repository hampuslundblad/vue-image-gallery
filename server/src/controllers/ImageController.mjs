import * as FlickrService from '../services/FlickrService.mjs'

export async function searchImage(req, res) {
  try {
    console.log()
      const images = await FlickrService.searchImages(req.params.imageText)
    return res.send({"images":images})
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      error: "An error has occured",
    });
  }
}

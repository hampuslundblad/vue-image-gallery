import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
} from "vitest";
import axios from "axios";
import { flushPromises, mount, shallowMount } from "@vue/test-utils";
import ImageGallery from "../components/ImageGallery.vue";
import { defineComponent } from "vue";
import { setupServer } from "msw/node";
import { rest } from "msw";

describe("ImageGallery.vue", () => {
  let wrapper = null;

  const images_nature = {
    images: ["www.flickr.com", "www.flickr.com"],
  };
  const images_starwars = {
    images: [
      "www.starwarsimage1.com",
      "www.starwarsimage2.com",
      "www.starwarsimage3.com",
    ],
  };

  const restHandlers = [
    rest.get("http://localhost:8081/images/search/nature", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(images_nature));
    }),
    rest.get(
      "http://localhost:8081/images/search/starwars",
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(images_starwars));
      }
    ),
  ];

  const server = setupServer(...restHandlers);

  // Start server before all tests
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

  //  Close server after all tests
  afterAll(() => server.close());

  // Reset handlers after each test `important for test isolation`
  afterEach(() => server.resetHandlers());
  beforeEach(() => {
    wrapper = mount(ImageGallery);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("renders images container", async () => {
    await flushPromises();
    const imageContainer = wrapper.find('[data-test="image-container"]');
    expect(imageContainer.exists()).toBe(true);
  });
  
  it("renders images", async () => {
    await flushPromises();
    const imageContainer = wrapper.get('[data-test="image-container"]');
    const images = imageContainer.findAll("img");
    expect(images.length).toEqual(images_nature.images.length);
  });

  it("renders new images given new search string", async () => {
    await flushPromises();
    const imageContainer = wrapper.get('[data-test="image-container"]');
    await wrapper.setProps({ search: "starwars" });
    await flushPromises();
    const images = imageContainer.findAll("img");
    expect(images.length).toEqual(images_starwars.images.length);
  });
});

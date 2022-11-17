import { describe, it, expect } from "vitest";

import { mount, flushPromises } from "@vue/test-utils";
import GalleryView from "../views/GalleryView.vue";
import ImageGallery from "../components/ImageGallery.vue";
//Not done
describe("GalleryView.vue", () => {
  //Setup
  const wrapper = mount(GalleryView);

  it("Input to have correct value", async () => {
    const inputDiv = wrapper.get('[data-test="user-input-container"]');
    const input = inputDiv.get("input");
    await input.setValue("winter")
    expect(input.element.value).toBe('winter')
  });

});

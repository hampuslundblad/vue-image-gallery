import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ImageGallery from "../ImageGallery.vue";
//Not done
describe("ImageGallery.vue", () => {
  it("Does not render image if it's loading", () => {
    const wrapper = mount(ImageGallery)
    wrapper.setProps({isLoading : true})
    const imageContainer = wrapper.exists('[data-test="image-container"]')
    expect(wrapper.find('[data-test="image-container"]').exists()).toBe(false);
  });
  it("Does render image if it's not loading", () => {
    const wrapper = mount(ImageGallery)
    wrapper.setProps({isLoading : false})
    const imageContainer = wrapper.exists('[data-test="image-container"]')
    expect(wrapper.find('[data-test="image-container"]').exists()).toBe(true);
  });
});

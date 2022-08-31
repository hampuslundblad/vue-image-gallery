import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TitleText from "../TitleText.vue";

describe("TitleText.vue", () => {
  it("renders slot content properly", () => {
    const wrapper = mount(TitleText, {
      slots: {
        default: "Main Content",
      },
    });
    expect(wrapper.html()).toContain("Main Content");
  });
});

import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ErrorMessage from "../ErrorMessage.vue";

describe("ErrorMessage.vue", () => {
  it("renders slot content properly", () => {
    const wrapper = mount(ErrorMessage, {
      slots: {
        default: "404 Error",
      },
    });
    expect(wrapper.html()).toContain("404 Error");
  });
});

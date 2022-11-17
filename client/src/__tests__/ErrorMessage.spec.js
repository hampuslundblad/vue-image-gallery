import { describe, it, expect, beforeEach, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import ErrorMessage from "../components/ErrorMessage.vue";

describe("ErrorMessage.vue", () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(ErrorMessage, {
      slots: {
        default: "404 Error",
      },
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("renders slot content properly", () => {
    expect(wrapper.html()).toContain("404 Error");
  });
});

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import GameBoardVue from "../GameBoard.vue";

describe('GameBoard', () => {
	it('should renders the component', () => {
		const wrapper = mount(GameBoardVue);
		expect(wrapper.exists()).toBeTruthy();
	})
})
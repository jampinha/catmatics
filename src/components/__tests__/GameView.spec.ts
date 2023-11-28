import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import GameViewVue from '../GameView.vue';

describe('GameView', () => {
	it('should renders the component', () => {
		const wrapper = mount(GameViewVue);
		expect(wrapper.exists()).toBeTruthy();
	});
});

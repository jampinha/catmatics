import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoardSceneVue from '@/components/BoardScene.vue';

describe('BoardScene', () => {
	it('should renders the component', () => {
		const wrapper = mount(BoardSceneVue);
		expect(wrapper.exists()).toBeTruthy();
	});
});

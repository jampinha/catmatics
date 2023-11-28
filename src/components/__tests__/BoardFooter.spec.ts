import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoardFooterVue from '@/components/BoardFooter.vue';

describe('BoardFooter', () => {
	it('should renders the component', () => {
		const wrapper = mount(BoardFooterVue);
		expect(wrapper.exists()).toBeTruthy();
		expect(wrapper.find('.best').exists()).toBe(true);
		expect(wrapper.find('.points').exists()).toBe(true);
	});
});

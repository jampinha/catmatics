import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoardHeaderVue from '@/components/BoardHeader.vue';

describe('BoardHeader', () => {
	it('should renders the component', () => {
		const wrapper = mount(BoardHeaderVue);
		expect(wrapper.exists()).toBeTruthy();
	});
});

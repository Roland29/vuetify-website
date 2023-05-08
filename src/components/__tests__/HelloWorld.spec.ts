import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders props.message when passed', async () => {
    const message = 'Hello, world!';
    const wrapper = shallowMount(HelloWorld, { props: { message } });
    expect(wrapper.text()).toMatch(message);
  });

  it('emits a warning if message prop is not passed', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    shallowMount(HelloWorld);

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy.mock.calls[0][0]).toStrictEqual('[Vue warn]: Missing required prop: "message"');

    consoleSpy.mockRestore();
  });
});

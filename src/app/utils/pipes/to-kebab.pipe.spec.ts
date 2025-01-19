import { ToKebabPipe } from './to-kebab.pipe';

describe('ToKebabPipe', () => {
  it('create an instance', () => {
    const pipe = new ToKebabPipe();
    expect(pipe).toBeTruthy();
  });
});

/** @jsxImportSource theme-ui */
import gradientAnimation from '../utils/gradientAnimation';

export default function gradientBar() {
  return (
    <div
      // @ts-expect-error It totally works, but something is wrong with the typing
      sx={{
        ...gradientAnimation(),
        width: '100%',
        height: '1',
        mb: [2, 3, 8, null, '3.5vh'],
      }}
    />
  );
}

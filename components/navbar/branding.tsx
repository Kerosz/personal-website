import { forwardRef, SVGProps } from 'react';
import { useGlobalContext } from 'context/rootContext';

interface BrandProps extends SVGProps<SVGSVGElement> {
  invert?: boolean;
}

const Branding = forwardRef<SVGSVGElement, BrandProps>((props, ref) => {
  const { invert, ...restProps } = props;
  const { themeOption } = useGlobalContext();

  let fillColor = themeOption === 'light' ? 'black' : 'white';

  if (invert) {
    if (fillColor === 'black') {
      fillColor = 'white';
    } else {
      fillColor = 'black';
    }
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 673.59 583.45'
      ref={ref}
      {...restProps}>
      <defs></defs>
      <g id='branding_2' data-name='branding_2'>
        <g id='branding_1' data-name='branding_1'>
          <path
            style={{ fill: fillColor }}
            d='M9.07,567.74,191.61,251.51l9.07-15.7,9.06,15.7L392.31,567.74l9.07,15.71H316.5l-3-5.25L200.65,382.8,87.86,578.15l-3,5.3H0ZM200.68,277.62,36.26,562.44H72.79L191.6,356.66l9.07-15.72,9.06,15.68L328.57,562.44h36.55Zm249,300.53L229.35,196.55l-3-5.2,3-5.21L327.73,15.7,336.8,0l9.06,15.7,156.45,271,9.07,15.71H426.55l-3-5.25L336.8,147l-25.65,44.44L494.9,509.74h51.36L454,349.9l-9.1-15.75h84.82l3.06,5.29,131.78,228.3,9.07,15.71H452.72ZM250.48,191.35,464.74,562.44H637.33L517.66,355.15H481.18L573.49,515l9.09,15.75H482.89l-3.06-5.29L290,196.64l-3-5.23,3-5.23,37.73-65.35,9.07-15.7,9.06,15.7,92.75,160.61h36.51L336.8,41.82Zm-41.2,269.88L270.74,567.7l9.1,15.75H120.59l9.09-15.75,61.47-106.47,9.06-15.69Zm34.24,101.21-43.31-75-43.31,75Z'
          />
        </g>
      </g>
    </svg>
  );
});

export default Branding;

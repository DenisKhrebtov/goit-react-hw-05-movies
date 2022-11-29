import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => (
  <MutatingDots
    height="100"
    width="100"
    color="#ffcbcb"
    secondaryColor="#ffcbcb"
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);
